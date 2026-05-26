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

    const subject = `New application — ${name}${company ? ` (${company})` : ''}`;
    const fields = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || '—'}`,
      `Website: ${website || '—'}`,
      `Budget: ${budget || '—'}`,
      `Timeline: ${timeline || '—'}`,
      '',
      'Project:',
      project,
    ];
    const textBody = fields.join('\n');

    // Priority 1: Resend (if API key configured)
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
          subject,
          text: textBody,
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error('Resend error:', res.status, text);
        return NextResponse.json({ ok: false }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    }

    // Priority 2: FormSubmit.co (free, no signup — server-side avoids browser blocklists)
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        company: company || '',
        website: website || '',
        budget: budget || '',
        timeline: timeline || '',
        project,
        _subject: subject,
        _replyto: email,
        _template: 'table',
      }),
    });

    if (!formSubmitRes.ok) {
      const text = await formSubmitRes.text();
      console.error('FormSubmit error:', formSubmitRes.status, text);
      // Don't fail the user — still log the submission server-side
      console.log('NEW APPLICATION (FormSubmit failed)', { name, email, company, website, budget, timeline, project });
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('apply route error', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
