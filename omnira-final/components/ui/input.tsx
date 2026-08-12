import type { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";
import { useId } from "react";
import { cn } from "@/lib/utils/cn";

interface FieldProps {
  label: string;
  hint?: string;
  error?: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

export function Field({
  label,
  hint,
  error,
  labelProps,
  children,
}: FieldProps & { children: (id: string, describedBy: string | undefined) => ReactNode }) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} {...labelProps} className="text-sm font-medium text-(--color-ink)">
        {label}
      </label>
      {children(id, describedBy)}
      {hint && !error ? (
        <p id={hintId} className="text-xs text-(--color-ink-muted)">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-xs text-(--color-danger)" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextInput({
  className,
  hasError,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }) {
  return (
    <input
      className={cn(
        "h-10 rounded-(--radius-md) border bg-(--color-panel) px-3 text-sm text-(--color-ink) outline-none transition-colors placeholder:text-(--color-ink-faint)",
        hasError
          ? "border-(--color-danger) focus:border-(--color-danger)"
          : "border-(--color-hairline) focus:border-(--color-accent)",
        className,
      )}
      {...props}
    />
  );
}
