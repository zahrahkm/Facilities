import { useState } from "react";

export const useDialog = <T = null>() => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const openDialog = (value: T) => {
    setData(value);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setData(null);
  };

  return {
    isOpen,
    data,
    openDialog,
    closeDialog,
  };
};
