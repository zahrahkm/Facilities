import { Card } from "./Card";
import { CardImage } from "./CardImage";
import { CardAddress } from "./CardAddress";
import { CardActions } from "./CardActions";
import { Facility } from "../../types/facility";
import { isFacilityOpen } from "../../utiles/time";
import { Badge } from "../Badge";


type Props = {
  facility: Facility;
  onEdit: () => void;
  onDelete: () => void;
};

export const FacilityCard = ({ facility, onEdit, onDelete }: Props) => {
  const isOpen = isFacilityOpen(facility.openingTime, facility.closingTime);

  return (
    <Card>
      <CardImage imageUrl={facility.imageUrl} alt={facility.name} isDefault={facility.isDefault} />
      
      <div className="flex items-start justify-between">
        <h2 className="text-body-base">{facility.name}</h2>
        <Badge variant={isOpen ? "success" : "error"} name={isOpen ? "Open" : "Closed"} />
      </div>

      <div className="flex justify-between items-center align-middle gap-2">
        <CardAddress address={facility.address} />
        <CardActions onDelete={onDelete} onEdit={onEdit} />
      </div>
    </Card>
  );
};
