import { Button } from "../Button";

type Props = {
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export const DialogFooter = ({
  onPrimaryAction,
  onSecondaryAction,
  primaryLabel,
  secondaryLabel,
}: Props) => {
  if (!onPrimaryAction && !onSecondaryAction) return null;

  return (
    <div className="flex justify-end gap-2 border-t px-3 py-3">
      {onSecondaryAction && (
        <Button variant="secondary" onClick={onSecondaryAction}>
          {secondaryLabel}
        </Button>
      )}
      {onPrimaryAction && (
        <Button variant="primary" size="medium" onClick={onPrimaryAction}>
          {primaryLabel}
        </Button>
      )}
    </div>
  );
};
