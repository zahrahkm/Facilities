import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

type LogoProps = {
  to?: string;             
  onClick?: () => void;     
  className?: string;       
};

export const Logo = ({
  to = '/',
  onClick,
  className = '',
}: LogoProps) => {
    
  const logoImg = (
    <img
      src={logo}
      alt="Logo"
      className={`h-auto w-[151px] ${className}`}
      onClick={onClick}
    />
  );

  return to ? (
    <Link to={to} className="flex items-center">
      {logoImg}
    </Link>
  ) : (
    <div className="flex items-center cursor-pointer">
      {logoImg}
    </div>
  );
};
