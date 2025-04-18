import { X } from "lucide-react";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "../Button";


type Props = {
  title?: string;
  onClose?: () => void;
};

export const DialogHeader = ({ title, onClose }: Props) => (
  <div className="flex justify-between items-center px-3 py-1.5 border-b h-12">
    {title && <DialogTitle className="text-nunito-header">{title}</DialogTitle>}
    <DialogClose>
      <Button variant="secondary" size="small" onClick={onClose}>
        <X className="h-4 w-4" />
      </Button>
    </DialogClose>
  </div>
);
