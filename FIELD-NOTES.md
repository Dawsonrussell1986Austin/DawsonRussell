# Dawson Russell — Field Notes

Personal-brand redesign, September 16, 2026.

- Homepage: AI field notes, newsletter signup, selected film work.
- /notes: three initial articles grounded in Dawson's supplied experiences.
- /studio: previous film homepage; existing film URLs retained.
- /about and /privacy: personal-brand context and service disclosures.
- Kit form: 9928078, public UID 9d6fb9f690. HTML form endpoint is in components/field-notes/Signup.tsx. No API credentials are required.
- Kit initially requested account email verification. Its verification banner cleared on the final dashboard check. Email delivery has not been tested.
- Forms submit directly to Kit; Kit handles confirmation and subscriber records. No test email or broadcast was sent.
- Production project: dawson-russell (prj_7SmEDidG7EURBC7uTwwTC6wC0jO6), team dawson-russells-projects.
- Previous production deployment: dpl_FdTRwf6jm7Q4D7Rb8C8Z7bC4ydxd.

Verification: Next production build/type checks passed. All added routes and representative preserved routes returned HTTP 200; an unknown article returned 404. Source reviewed for responsive breakpoints, labels, keyboard focus, and isolated client state. Browser visual testing and real signup/email delivery were not performed.

Email operation constraint: obtain Dawson's explicit approval of final recipients, subject, and body in chat before sending any email or broadcast. Do not create mailbox drafts unless explicitly requested.
