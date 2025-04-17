import clsx from "clsx";
import { baseButtonClasses, ButtonSize, ButtonVariant, variantSizeClasses } from "../styles/theme/buttonTheme";


type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "primary",
  size = "default",
  className="",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        baseButtonClasses,
        variantSizeClasses[variant][size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
