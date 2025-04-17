import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useFacilityStore } from "../store/facilityStore";
import { Facility } from "../types/facility";
import { FacilityDeleteDialog } from "../components/FacilityDeleteDialog";
import { EmptyStateCard } from "../components/card/EmptyStateCard";
import { FacilityGrid } from "../components/FacilityGrid";
import { useDialog } from "../hooks/useDialog"; 
import { getCreatePageUrl, getEditPageUrl } from "../utiles";

export const FacilitiesListPage = () => {
  const { facilities, deleteFacility } = useFacilityStore();
  const navigate = useNavigate();

  const {
    isOpen: isDialogOpen,
    data: selectedFacility,
    openDialog: handleDeleteClick,
    closeDialog,
  } = useDialog<Facility>();

  const handleCreate = () => navigate(getCreatePageUrl());

  const handleEdit = (id: string) => navigate(getEditPageUrl(id));

  const confirmDelete = () => {
    if (selectedFacility) {
      deleteFacility(selectedFacility.id);
      closeDialog();
    }
  };

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
    <div className="flex flex-col gap-[10px] py-4">
      <div className="flex justify-end items-center mb-1">
        <Button onClick={handleCreate}>Create Facility</Button>
      </div>

      <FacilityGrid
        facilities={facilities}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
      />

      <FacilityDeleteDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onConfirm={confirmDelete}
        facilityName={selectedFacility?.name}
      />
    </div>
  );
};
