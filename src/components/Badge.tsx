import clsx from "clsx";

type BadgeVariant = "success" | "error";

type BadgeProps = {
  variant: BadgeVariant;
  name: string;
  className?: string;
};

const variantClasses: Record<BadgeVariant, string> = {
  success: "succes",
  error: "error",
};

export const Badge = ({ variant, name, className = "" }: BadgeProps) => {
  return (
    <span
      role="status"
      aria-label={`Status: ${name}`}
      className={clsx(
        "base-badge",
        variantClasses[variant],
        className
      )}
    >
      {name}
    </span>
  );
};
