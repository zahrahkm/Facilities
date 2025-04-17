import { Link } from 'react-router-dom';

type NavItemProps = {
  label: string;
  to: string;
  isDisabled?: boolean;
  onClick?:()=>void
};

export const NavItem = ({ label, to, isDisabled = false,onClick }: NavItemProps) => {
  return (
    <span
      className={`text-body-strong ${isDisabled ? 'btn-disabled' : 'text-white'}`}
    >
      {isDisabled ? label : <Link to={to} onClick={onClick}>{label}</Link>}
    </span>
  );
};
