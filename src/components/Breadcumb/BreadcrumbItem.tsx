import React, { useContext } from "react";
import BreadcrumbContext from "./BreadcrumbContext";

export interface BreadcrumbItemProps {
  children: React.ReactNode | string;
  href: string;
  isActive?: boolean;
  className?: string;
  isEnd?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  href,
  isActive = false,
  isEnd = false,
  className = "transition-colors duration-150 hover:text-gray-600 text-gray-400 text-sm",
}) => {
  const breadCrumbContext = useContext(BreadcrumbContext);
  const divider = breadCrumbContext?.divider ?? (
    <span className="px-3 text-gray-300">/</span>
  );
  const activeClassName = breadCrumbContext?.activeClassName ?? "text-gray-500";

  return (
    <>
      <li className={`${isActive ? activeClassName : ""}`}>
        {href && !isActive ? (
          <a className={className} href={href}>
            {children}
          </a>
        ) : (
          <>{children}</>
        )}
      </li>
      {!isEnd && divider}
    </>
  );
};

export default BreadcrumbItem;
