import { cn } from '../lib/cn';

interface IBadgeProps {
  variant: 'contained' | 'outlined';
  color?: string;
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ variant, children, color, className }: IBadgeProps): React.ReactElement => {
  const isOutlined = variant === 'outlined';

  // 기본값(공통)
  const base = 'inline-flex items-center px-3 py-1 h-7 rounded-md text-xs';

  const contained = cn(`bg-[var(--color-${color})]`, 'text-[var(--color-neutral-10)]');
  const outlined = cn(
    'bg-transparent border',
    `border-[var(--color-${color})]`,
    `text-[var(--color-${color})]`,
  );

  return <div className={cn(base, isOutlined ? outlined : contained, className)}>{children}</div>;
};
