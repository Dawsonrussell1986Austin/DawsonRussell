"use client";

// Routes to the QuickBooks (Intuit) payment link for the $500 deposit.
// Renders as a real anchor so right-click / open-in-new-tab work.

type Props = {
  label: string;
  className?: string;
};

const CHECKOUT_URL =
  "https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-5cd77dc3a3b442b1891737811a22f3328455e4c753d348f0b5e0c8b97f4c1e1137041830cb5944f9b737cc5ae46fe762?locale=EN_US&cta=saveandcopylink";

export function CheckoutButton({ label, className }: Props) {
  function onClick() {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout");
    }
  }
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className ?? "btn-primary"}
    >
      {label}
    </a>
  );
}
