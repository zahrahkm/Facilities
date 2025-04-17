import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { getCreatePageUrl, getEditPageUrl } from "../utiles";
import { EmptyStateCard } from "../components/card/EmptyStateCard";
import { FacilityGrid } from "../components/FacilityGrid";
import { useFacilityStore } from "../store/facilityStore";


export const FacilitiesListPage = () => {

  const navigate = useNavigate();

  const { facilities } = useFacilityStore();

  const handleCreate = () => navigate(getCreatePageUrl());

  const handleEdit = (id: string) => navigate(getEditPageUrl(id));


  if (facilities.length === 0) {
    return (
      <EmptyStateCard
        title="No facilities have been added yet."
        description="Start by creating your first facility to manage locations, view details, and customize your setup."
        actionLabel="Create Facility"
        onAction={handleCreate}
      />
    );
  }

  return (
    <div className=" flex flex-col gap-[10px] py-4">
      <div className="flex justify-end items-center mb-1">
        <Button onClick={handleCreate}>Create Facility</Button>
      </div>

      <FacilityGrid
        facilities={facilities}
        onEdit={handleEdit}
        onDelete={()=>{console.log('delete')}}
      />
      
    </div>
  );
};
