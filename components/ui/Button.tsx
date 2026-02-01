import * as React from "react";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean; // si luego quieres usarlo con <a> mediante wrapper
}

/**
 * Button UI component (simple, sin dependencias).
 * Usa variables de tu paleta: --gold y --char (definidas en globals.css).
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "md",
      type = "button",
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold " +
      "transition-all duration-300 " +
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] " +
      "focus-visible:ring-offset-2 focus-visible:ring-offset-black " +
      "disabled:opacity-50 disabled:pointer-events-none";

    const sizes: Record<ButtonSize, string> = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-5 text-sm",
      lg: "h-12 px-6 text-base",
    };

    const variants: Record<ButtonVariant, string> = {
      default:
        "bg-[color:var(--gold)] text-[color:var(--char)] " +
        "shadow-lg shadow-black/20 hover:brightness-110 hover:scale-[1.01]",
      outline:
        "border border-white/15 bg-white/5 text-white/90 backdrop-blur " +
        "hover:bg-white/10 hover:-translate-y-[1px]",
      ghost:
        "bg-transparent text-white/85 hover:bg-white/10 hover:text-white",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
