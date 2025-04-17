import { Trash } from "lucide-react";
import { Button } from "../Button";

type CardActionsProps = {
  onEdit?: () => void;
  onDelete?: () => void;
};

export const CardActions = ({ onEdit, onDelete }: CardActionsProps) => (
  <div className="flex justify-end space-x-1 mt-1">
    {onDelete && (
      <Button variant="secondary" size="small" onClick={onDelete}>
        <Trash/>
      </Button>
    )}
    {onEdit && (
      <Button variant="secondary" size="medium" onClick={onEdit}>
        Edit
      </Button>
    )}
  </div>
);
