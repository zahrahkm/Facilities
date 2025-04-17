
import { useState } from 'react';
import { DesktopNavigation } from '../../menu/DesktopNavigation';
import { MenuButton } from '../../menu/MenuButton';
import { MobileSidebar } from '../../menu/MobileSidebar';
import { Logo } from '../Logo';
export const HeaderBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Facilities", to: "/", isDisabled: false },
    { label: "Locations", to: "/locations", isDisabled: true },
    { label: "Players", to: "/players", isDisabled: true },
    { label: "Access Management", to: "/access-management", isDisabled: true },
  ];

  return (
    <header className="header-bar">
        <div className='container flex mx-auto'>
            <Logo/>

            <DesktopNavigation navigationItems={navigationItems} />
            
            <div className='flex ml-auto'>
                <MenuButton
                    isOpen={isMobileMenuOpen}
                    toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
            </div>
            
        </div>

        {isMobileMenuOpen && (
            <MobileSidebar
                navigationItems={navigationItems}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        )}
    </header>
  );
};
