import { Star } from "lucide-react";

type CardImageProps = {
  imageUrl: string;
  alt: string;
  isDefault?: boolean;
};

export const CardImage = ({ imageUrl, alt, isDefault }: CardImageProps) => (
  <div className="relative">
    <img
      src={imageUrl}
      alt={alt}
      className="w-full h-48 object-cover mb-2 rounded-md"
    />
    {isDefault && (
      <div className="absolute top-2 left-2 default-badge">
        <Star className="text-white w-4 h-4" />
      </div>
    )}
  </div>
);
