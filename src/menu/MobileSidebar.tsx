import { X } from 'lucide-react';
import { NavItem } from './NavItem';

type NavigationItem = {
  label: string;
  to: string;
  isDisabled: boolean;
}

type Props = {
  navigationItems: NavigationItem[];
  onClose: () => void;
}

export const MobileSidebar = ({ navigationItems, onClose }: Props) => {
  return (
    <>
      {/* Backdrop */}
      <div className="overlay" onClick={onClose} />

      {/* Sidebar */}
      <div className="mobile-header-bar">
        <button className="self-end text-gray-700" onClick={onClose} aria-label="Close menu">
          <X className="h-6 w-6 text-white" />
        </button>

        {navigationItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            to={item.to}
            isDisabled={item.isDisabled}
            onClick={onClose}
          />
        ))}

      </div>
    </>
  );
};
