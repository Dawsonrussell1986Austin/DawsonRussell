import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, website, budget, timeline, project } = body || {};

    if (!name || !email || !project) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    const to = process.env.CONTACT_TO || 'dawson@dawsonrussell.com';
    const resendKey = process.env.RESEND_API_KEY;

    // If a Resend key is configured, send via Resend. Otherwise log to console
    // so deploys without env vars don't 500 — the submission is still captured
    // in the platform logs.
    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Dawson Russell <noreply@dawsonrussell.com>',
          to: [to],
          reply_to: email,
          subject: `New application — ${name}${company ? ` (${company})` : ''}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Company: ${company || '—'}`,
            `Website: ${website || '—'}`,
            `Budget: ${budget || '—'}`,
            `Timeline: ${timeline || '—'}`,
            '',
            'Project:',
            project,
          ].join('\n'),
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error('Resend error:', res.status, text);
        return NextResponse.json({ ok: false }, { status: 502 });
      }
    } else {
      console.log('NEW APPLICATION', { name, email, company, website, budget, timeline, project });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('apply route error', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
