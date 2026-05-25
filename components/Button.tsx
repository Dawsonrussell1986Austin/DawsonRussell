import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
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
  const base =
    'inline-flex items-center gap-2 px-7 py-4 text-sm font-medium tracking-tight rounded-full';
  const variants = {
    primary: 'btn-primary',
    ghost: 'btn-ghost',
  };
  const Cmp: any = external ? 'a' : Link;
  const props: any = external
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href };
  return (
    <Cmp {...props} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {withArrow && <ArrowUpRight size={16} strokeWidth={1.75} />}
    </Cmp>
  );
}
