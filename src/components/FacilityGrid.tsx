import { Facility } from "../types/facility";
import { FacilityCard } from "./card/FacilityCard";

type FacilityGridProps= {
    facilities: Facility[];
    onEdit: (id: string) => void;
    onDelete: (facility: Facility) => void;
  }
  
  export const FacilityGrid = ({ facilities, onEdit, onDelete }: FacilityGridProps) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
      {facilities.map((facility) => (
        <FacilityCard
          key={facility.id}
          facility={facility}
          onEdit={() => onEdit(facility.id)}
          onDelete={() => onDelete(facility)}
        />
      ))}
    </div>
  );
  