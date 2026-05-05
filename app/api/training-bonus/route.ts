import { NextResponse } from "next/server";

// After someone registers for the training, we ask them ONE more thing:
// either name a topic they want covered, or drop their website / deck link
// so Dawson can use it as the live build example. This route attaches that
// answer to the existing GHL contact (upsert by email) as a tag + Note.

const GHL_CONTACTS_URL = "https://services.leadconnectorhq.com/contacts/upsert";
const GHL_NOTES_URL = (id: string) =>
  `https://services.leadconnectorhq.com/contacts/${id}/notes`;
const GHL_TASKS_URL = (id: string) =>
  `https://services.leadconnectorhq.com/contacts/${id}/tasks`;
const GHL_API_VERSION = "2021-07-28";

type Payload = {
  email?: string;
  firstName?: string;
  topic?: string;
  link?: string;
};

export async function POST(req: Request) {
  let body: Payload = {};
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { email = "", firstName = "", topic = "", link = "" } = body;

  if (!email) {
    return NextResponse.json(
      { ok: false, error: "email required" },
      { status: 400 },
    );
  }
  if (!topic && !link) {
    return NextResponse.json(
      { ok: false, error: "topic or link required" },
      { status: 400 },
    );
  }

  const ghlKey = process.env.GHL_API_KEY;
  const ghlLocation = process.env.GHL_LOCATION_ID;
  const assignedTo = process.env.GHL_ASSIGNED_USER_ID;

  if (!ghlKey || !ghlLocation) {
    // Soft success — registration already captured by primary route.
    return NextResponse.json({ ok: true, via: "noop" });
  }

  const tags = ["training-bonus-submitted"];
  if (link) tags.push("wants-real-example");
  if (topic) tags.push("wants-topic");

  const upsertRes = await fetch(GHL_CONTACTS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ghlKey}`,
      Version: GHL_API_VERSION,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...(firstName ? { firstName } : {}),
      email,
      locationId: ghlLocation,
      tags,
      ...(assignedTo ? { assignedTo } : {}),
    }),
  });

  let upsertJson: any = null;
  try {
    upsertJson = await upsertRes.json();
  } catch {
    // ignore
  }
  if (!upsertRes.ok) {
    console.error(
      "[training-bonus] GHL upsert failed",
      upsertRes.status,
      JSON.stringify(upsertJson),
    );
    return NextResponse.json(
      { ok: false, status: upsertRes.status, detail: upsertJson },
      { status: 502 },
    );
  }

  const contactId: string | undefined = upsertJson?.contact?.id;
  if (contactId) {
    const noteBody = [
      "TRAINING REGISTRATION BONUS",
      topic ? `Wants to learn: ${topic}` : null,
      link ? `Live-example candidate link: ${link}` : null,
    ]
      .filter(Boolean)
      .join("\n\n");

    // Pinned note so it sticks to the top of the Notes tab.
    try {
      await fetch(GHL_NOTES_URL(contactId), {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ghlKey}`,
          Version: GHL_API_VERSION,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ body: noteBody, pinned: true }),
      });
    } catch (err) {
      console.error("[training-bonus] note attach failed", err);
    }

    // Task so it shows up in Dawson's dashboard feed and on the contact card.
    // Due tomorrow at 9am — well before the training, so it's actionable.
    try {
      const due = new Date();
      due.setDate(due.getDate() + 1);
      due.setHours(9, 0, 0, 0);
      const taskTitle = link
        ? `Review live-example candidate: ${firstName || email}`
        : `Topic request from ${firstName || email}`;
      await fetch(GHL_TASKS_URL(contactId), {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ghlKey}`,
          Version: GHL_API_VERSION,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          title: taskTitle,
          body: noteBody,
          dueDate: due.toISOString(),
          completed: false,
          ...(assignedTo ? { assignedTo } : {}),
        }),
      });
    } catch (err) {
      console.error("[training-bonus] task create failed", err);
    }
  }

  return NextResponse.json({ ok: true, contactId });
}
