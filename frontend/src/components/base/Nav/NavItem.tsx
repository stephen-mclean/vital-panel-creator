import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

type Props = {
  to: string;
  icon: string;
  label: string;
};

export const NavItem = ({ to, icon, label }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={classNames(
        "flex items-center gap-3 p-2 rounded hover:bg-gray-50 text-gray-600 text-sm transition-colors",
        {
          "bg-gray-50 text-gray-700": isActive,
        }
      )}
    >
      <i className={icon}></i>
      <span>{label}</span>
    </Link>
  );
};
