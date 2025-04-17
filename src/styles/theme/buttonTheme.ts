export type ButtonSize = 'default' | 'medium' | 'small';
export type ButtonVariant = 'primary' | 'secondary';

export const baseButtonClasses =
  "inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap text-neutral";

export const variantSizeClasses: Record<
  ButtonVariant,
  Record<ButtonSize, string>
> = {
  primary: {
    default: "bg-primaryDefault text-positiveBackground w-36 h-9 md:px-6 gap-2.5",
    medium: "bg-primaryDefault text-positiveBackground w-32 h-9 md:px-6 gap-2.5",
    small: "bg-primaryDefault text-positiveBackground w-8 h-8 p-2",
  },
  secondary: {
    default: "bg-secondary text-gray-900 hover:bg-secondaryHover w-24 h-9 md:px-6 gap-2.5",
    medium: "bg-secondary text-gray-900 hover:bg-secondaryHover w-[75px] h-8 md:px-6 gap-2.5",
    small: "bg-secondary text-gray-900 hover:bg-secondaryHover w-8 h-8 p-2",
  },
};
