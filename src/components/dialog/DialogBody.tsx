import { DialogDescription } from "@radix-ui/react-dialog";
import React from "react";

type Props = {
  description?: string;
  children?: React.ReactNode;
};

export const DialogBody = ({ description, children }: Props) => (
  <div className="p-3">
    {description && <DialogDescription className="text-nunito-body">{description}</DialogDescription>}
    {children}
  </div>
);
