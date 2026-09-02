import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-[0.98]';

    const sizeStyles = {
      sm: 'text-xs px-3.5 py-1.5 h-8 gap-1.5',
      md: 'text-sm px-5 py-2.5 h-11 gap-2',
      lg: 'text-base px-7 py-3.5 h-13 gap-2.5',
    };

    const variantStyles = {
      primary:
        'bg-primary text-primary-foreground border border-blue-700/40 shadow-sm hover:bg-blue-800 hover:border-gold/50 hover:shadow-gold/20 hover:shadow-lg',
      gold: 'bg-gold text-slate-950 font-semibold shadow-md hover:brightness-110 hover:shadow-gold/40 hover:shadow-lg border border-amber-300/40',
      secondary:
        'bg-secondary text-secondary-foreground border border-border hover:bg-muted hover:border-gold/30',
      outline:
        'border border-border bg-transparent text-foreground hover:bg-secondary/60 hover:border-gold/50 hover:text-foreground',
      ghost:
        'bg-transparent text-foreground hover:bg-secondary/60 hover:text-foreground',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
