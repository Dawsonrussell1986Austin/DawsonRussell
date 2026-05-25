import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'danger';
  className?: string;
  withArrow?: boolean;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  withArrow = false,
  external = false,
}: Props) {
  const base = 'inline-flex items-center justify-center gap-2 px-7 py-3.5';
  const variants = {
    primary: 'btn-primary',
    ghost: 'btn-ghost',
    danger: 'btn-danger',
  };
  const Cmp: any = external ? 'a' : Link;
  const props: any = external
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href };
  return (
    <Cmp {...props} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      {withArrow && <ArrowRight size={14} strokeWidth={2.5} />}
    </Cmp>
  );
}
