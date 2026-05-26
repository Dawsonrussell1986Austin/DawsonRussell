'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Status = 'idle' | 'submitting' | 'sent' | 'error';

export function ApplicationForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error('Bad response');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] border border-[var(--border-strong)] bg-[var(--surface-2)] p-10"
      >
        <div className="spec-label mb-6">Application received</div>
        <div className="display text-3xl text-white">You're on the list.</div>
        <p className="mt-6 text-[var(--muted-2)] max-w-md">
          I'll be in touch within 48 hours. In the meantime, email me at{' '}
          <a
            href="mailto:dawson@dawsonrussell.com"
            className="text-white underline underline-offset-4"
          >
            dawson@dawsonrussell.com
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[24px] border border-[var(--border-strong)] bg-[var(--surface-2)] p-6 md:p-8 space-y-5"
    >
      <Row>
        <Field label="Name" name="name" required placeholder="Your full name" />
        <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
      </Row>
      <Row>
        <Field label="Company" name="company" placeholder="Where you work" />
        <Field label="Website" name="website" placeholder="https://" />
      </Row>
      <Row>
        <SelectField
          label="Budget"
          name="budget"
          options={['Under $10k', '$10k – $25k', '$25k – $50k', '$50k+', 'Not sure yet']}
        />
        <SelectField
          label="Timeline"
          name="timeline"
          options={['ASAP', 'Within 2 weeks', 'Within a month', 'Just exploring']}
        />
      </Row>
      <div>
        <Label>Project</Label>
        <textarea
          name="project"
          rows={5}
          required
          placeholder="Tell me what you're trying to make, who it's for, and what success looks like."
          className="w-full mt-2 px-4 py-3 rounded-[16px] bg-[var(--bg)] border border-[var(--border-strong)] focus:border-white/30 outline-none placeholder:text-[var(--muted)] text-white text-sm resize-none transition-colors"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        <div className="font-mono text-[10px] tracking-[0.25em] text-[var(--muted)] uppercase">
          Reply within 48 hours
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary inline-flex items-center px-8 py-3.5 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Sending…' : 'Submit application'}
        </button>
      </div>
      {status === 'error' && (
        <div className="text-sm text-white/80 rounded-[16px] bg-white/[0.04] border border-[var(--border-strong)] p-4">
          Something went wrong. Email me at{' '}
          <a href="mailto:dawson@dawsonrussell.com" className="underline underline-offset-4">
            dawson@dawsonrussell.com
          </a>
          .
        </div>
      )}
    </form>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{children}</div>;
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="spec-label">{children}</div>;
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>
        {label}
        {required && <span className="text-white/60"> *</span>}
      </Label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full mt-2 px-4 py-3 rounded-full bg-[var(--bg)] border border-[var(--border-strong)] focus:border-white/30 outline-none placeholder:text-[var(--muted)] text-white text-sm transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        name={name}
        defaultValue=""
        className="w-full mt-2 px-4 py-3 rounded-full bg-[var(--bg)] border border-[var(--border-strong)] focus:border-white/30 outline-none text-white text-sm appearance-none cursor-pointer transition-colors"
      >
        <option value="" disabled className="bg-[var(--bg)]">
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[var(--bg)] text-white">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
