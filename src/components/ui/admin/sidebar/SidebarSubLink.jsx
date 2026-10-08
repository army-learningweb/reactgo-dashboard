import { ChevronRight } from 'lucide-react';
import { NavLink } from "react-router";

export default function SidebarSubLink({to,name}) {
  return (
    <NavLink end to={to} className="flex gap-2 items-center [&.active]:text-blue-500 hover:text-blue-500">
      <ChevronRight size={15} />
      <span>{name}</span>
    </NavLink>
  );
}
