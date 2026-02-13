"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-green focus-visible:ring-offset-2 focus-visible:ring-offset-deep-space disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-electric-green text-deep-space hover:shadow-glow-green hover:brightness-110 active:brightness-95",
        secondary:
          "bg-glass border border-glass-border text-soft-white hover:bg-white/10 active:bg-white/5",
        outline:
          "bg-transparent border border-glass-border text-soft-white hover:bg-white/5 active:bg-white/10",
        ghost:
          "bg-transparent text-soft-white hover:bg-white/5 active:bg-white/10",
      },
      size: {
        sm: "h-9 px-4 text-sm gap-1.5",
        md: "h-10 px-5 text-sm gap-2",
        lg: "h-12 px-6 text-base gap-2",
        xl: "h-14 px-8 text-lg gap-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
