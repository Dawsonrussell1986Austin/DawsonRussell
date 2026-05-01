"use client";

import { useState } from "react";

// Faithful port of the existing custom contact form which POSTs to formsubmit.co.
// Swap to GHL later if desired; for now this preserves current behavior.
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ink/10 bg-white p-8 text-center">
        <h4 className="font-serif text-2xl text-ink">Message sent</h4>
        <p className="mt-2 text-sm text-text-secondary">
          We'll review your project details and get back to you within 48 hours
          with a scoping call invitation.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6">
      <div className="mb-5">
        <h3 className="font-serif text-xl text-ink">Start a project</h3>
        <p className="text-sm text-text-secondary">
          Fill out the form and we'll be in touch shortly.
        </p>
      </div>
      <form
        action="https://formsubmit.co/dawson@dawsonrussell.com"
        method="POST"
        onSubmit={() => setSubmitted(true)}
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="_subject" value="New Project Inquiry — DawsonRussell.com" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" className="hidden" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="name" label="Full name *" placeholder="John Smith" required />
          <Field name="email" type="email" label="Email *" placeholder="john@company.com" required />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="phone" type="tel" label="Phone" placeholder="(555) 123-4567" />
          <Field name="company" label="Company" placeholder="Company name" />
        </div>
        <label className="flex flex-col gap-1.5 text-xs uppercase tracking-widest text-text-muted">
          What are you looking to build?
          <select
            name="project_type"
            defaultValue=""
            className="rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink"
          >
            <option value="" disabled>Select a project type</option>
            <option>Custom AI Agent</option>
            <option>Internal AI Application</option>
            <option>Workflow Automation</option>
            <option>AI-Powered Integration</option>
            <option>Data & Knowledge System</option>
            <option>Full Multi-System Buildout</option>
            <option>Not sure yet — need guidance</option>
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-xs uppercase tracking-widest text-text-muted">
          Tell us about the project
          <textarea
            name="message"
            rows={4}
            placeholder="What problem are you trying to solve? What does success look like?"
            className="rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink"
          />
        </label>
        <button type="submit" className="btn-primary mt-2">
          Send Message
        </button>
        <p className="text-center text-xs text-text-muted">
          Your information is kept confidential and never shared.
        </p>
      </form>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-xs uppercase tracking-widest text-text-muted">
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-text-muted/60"
      />
    </label>
  );
}
