import React from "react";
import { Button } from "./Button";
import { X } from "lucide-react";


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
}

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div className="overlay" onClick={onClose}/>

  
        {/* Dialog Content */}
        <div className="relative z-50 w-[414px] h-[198px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
            
            <div className="flex justify-between align-middle items-center px-3 py-1.5 border-b h-12">
                {title && (
                    <h3 className="text-nunito-header">{title}</h3>
                )}
                <Button variant="secondary" size='small' onClick={onSecondaryAction}>
                      <X className="h-4 w-4" />
                </Button>
            </div>
            <div className="px-3 py-3">
                {description && (
                <p className="text-nunito-body">{description}</p>
                )}
                
                {children}
            </div>

          {/* Actions */}
          {(onPrimaryAction || onSecondaryAction) && (
            <div className="flex justify-end gap-2 border-t px-3 py-3">
              {onSecondaryAction && (
                <Button
                  variant="secondary"
                  onClick={onSecondaryAction}
                >
                  {secondaryLabel}
                </Button>
              )}
              {onPrimaryAction && (
                
                <Button variant="primary" size="medium" onClick={onPrimaryAction}>{primaryLabel}</Button>
              )}
            </div>
          )}
        </div>
    </div>
  );
};
