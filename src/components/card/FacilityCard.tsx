import { Card } from "./Card";
import { CardImage } from "./CardImage";
import { CardAddress } from "./CardAddress";
import { CardActions } from "./CardActions";
import { Facility } from "../../types/facility";
import { getNextStatusChangeTime, isFacilityOpen } from "../../utiles/time";
import { Badge } from "../Badge";
import { useEffect, useState } from "react";


type Props = {
  facility: Facility;
  onEdit: () => void;
  onDelete: () => void;
};

export const FacilityCard = ({ facility, onEdit, onDelete }: Props) => {
  const [isOpen, setIsOpen] = useState(() => 
    isFacilityOpen(facility.openingTime, facility.closingTime)
  );
  console.log(facility.name)

  useEffect(() => {
    function scheduleNextStatusUpdate() {
      // Update the current open/closed status
      setIsOpen(isFacilityOpen(facility.openingTime, facility.closingTime));

      // Find when the next status change will happen
      const nextChange = getNextStatusChangeTime(facility.openingTime, facility.closingTime);
      const delay = nextChange.getTime() - Date.now();

      // Schedule a re-check at that time
      const timeoutId = setTimeout(scheduleNextStatusUpdate, delay);
      return timeoutId;
    }

    const id = scheduleNextStatusUpdate();

    return () => clearTimeout(id); // Clean up when the component is removed
  }, [facility.openingTime, facility.closingTime]);


  return (
    <Card ariaLabel={facility.name}>
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
