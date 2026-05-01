"use client";

// STUB: Stripe wiring lands in Phase E after the copy review.
// For now this just logs and shows an alert so the page is fully clickable.

type Props = {
  label: string;
  className?: string;
};

export function CheckoutButton({ label, className }: Props) {
  function onClick() {
    // eslint-disable-next-line no-console
    console.log("[CheckoutButton] stub clicked — Stripe wiring pending Phase E");
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout");
    }
    if (typeof window !== "undefined") {
      window.alert("Stripe wiring coming after copy review.");
    }
  }
  return (
    <button type="button" onClick={onClick} className={className ?? "btn-primary text-base px-8 py-4"}>
      {label}
    </button>
  );
}
