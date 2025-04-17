import { MapPin } from "lucide-react";

type CardAddressProps = {
  address: string;
};

export const CardAddress = ({ address }: CardAddressProps) => (
  <div className="flex align-middle truncate items-center">
    <MapPin className="h-5 w-5" />
    <p className="text-textDefaultSecondary text-body-small truncate ml-0.5">
      {address}
    </p>
  </div>
);
