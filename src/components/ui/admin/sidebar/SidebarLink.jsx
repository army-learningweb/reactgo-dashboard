import { NavLink } from "react-router";
import { ChevronDown } from "lucide-react";

export default function SidebarLink({ children, icon, name, to, className, isOpen, ...props }) {
  return (
    <>
      <NavLink
        to={to}
        className={`px-2 py-1.5 rounded-md ${to? '[&.active]:text-blue-500' : ''} hover:text-blue-500 ${className}`}
        {...props}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            {icon}
            <span>{name}</span>
          </div>

          {children && (
            <ChevronDown size={17} className={`${isOpen && ('rotate-90')}`}/>
          )}
          
        </div>
      </NavLink>

      {children && (
        isOpen && (
          <div className="flex flex-col gap-3 mt-1 ms-5">{children}</div>
        )
      )}
    </>
  );
}
