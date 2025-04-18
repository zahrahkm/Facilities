import * as RadixDialog from "@radix-ui/react-dialog";
import { DialogHeader } from "./DialogHeader";
import { DialogBody } from "./DialogBody";
import { DialogFooter } from "./DialogFooter";

type DialogProps = {
  isOpen: boolean;
  onClose?: () => void;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  primaryLabel?: string;
  secondaryLabel?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

export const Dialog = ({
  isOpen,
  onClose,
  onPrimaryAction,
  onSecondaryAction,
  primaryLabel,
  secondaryLabel,
  title,
  description,
  children,
}: DialogProps) => {
  if (!isOpen) return null;

  return (
    <RadixDialog.Root open={isOpen} onOpenChange={(open) => !open && onClose?.()}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="overlay" />
        <RadixDialog.Content
          className="dialog-container"
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <div className="dialog-card">
            <DialogHeader title={title} onClose={onSecondaryAction} />
            <DialogBody description={description}>{children}</DialogBody>
            <DialogFooter
              onPrimaryAction={onPrimaryAction}
              onSecondaryAction={onSecondaryAction}
              primaryLabel={primaryLabel}
              secondaryLabel={secondaryLabel}
            />
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
