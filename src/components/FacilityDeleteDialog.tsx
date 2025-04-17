import { Dialog } from "./Dialog";


type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  facilityName?: string | null;
};

export const FacilityDeleteDialog = ({
  isOpen,
  onClose,
  onConfirm,
  facilityName,
}: Props) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      onPrimaryAction={onConfirm}
      onSecondaryAction={onClose}
      primaryLabel="Yes, Delete"
      secondaryLabel="Cancel"
      title="Delete Facility"
      description="Are you sure you want to delete this facility? This action cannot be undone."
    >
      <span className="flex">
        <p className="text-nunito-body">Facility: </p>
        <p className="text-nunito-bold ml-1">{facilityName}</p>
      </span>
    </Dialog>
  );
};
