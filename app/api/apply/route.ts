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
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

    const subject = `New application — ${name}${company ? ` (${company})` : ''}`;
    const textBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || '—'}`,
      `Website: ${website || '—'}`,
      `Budget: ${budget || '—'}`,
      `Timeline: ${timeline || '—'}`,
      '',
      'Project:',
      project,
    ].join('\n');

    // Priority 1: Resend (best — your own domain `from:` address once verified)
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
      if (res.ok) return NextResponse.json({ ok: true });
      console.error('Resend error:', res.status, await res.text());
    }

    // Priority 2: Web3Forms (free, works from serverless, no domain verification)
    if (web3formsKey) {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject,
          from_name: 'Dawson Russell site',
          email,
          message: textBody,
          name,
          company: company || '',
          website: website || '',
          budget: budget || '',
          timeline: timeline || '',
          project,
        }),
      });
      if (res.ok) return NextResponse.json({ ok: true });
      console.error('Web3Forms error:', res.status, await res.text());
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    // No service configured — log and surface the issue so leads aren't lost silently
    console.error(
      'CONTACT FORM NOT CONFIGURED — set WEB3FORMS_ACCESS_KEY or RESEND_API_KEY in Vercel env vars.',
      { name, email, company, website, budget, timeline, project },
    );
    return NextResponse.json({ ok: false, error: 'Email service not configured' }, { status: 503 });
  } catch (err) {
    console.error('apply route error', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
