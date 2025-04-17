import { NavItem } from './NavItem';

type NavigationItem ={
  label: string;
  to: string;
  isDisabled: boolean;
}

type Props ={
  navigationItems: NavigationItem[];
}

export const DesktopNavigation = ({ navigationItems }: Props) => {
  return (
    <nav className="hidden md:flex gap-6 ml-8">
      {navigationItems.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          to={item.to}
          isDisabled={item.isDisabled}
        />
      ))}
    </nav>
  );
};
