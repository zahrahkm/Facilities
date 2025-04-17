import { Menu, X } from 'lucide-react';

type Props ={
  isOpen: boolean;
  toggle: () => void;
}

export const MenuButton = ({ isOpen, toggle }: Props) => {
  return (
    <button
      className="md:hidden bg-navbarBackground"
      onClick={toggle}
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
};