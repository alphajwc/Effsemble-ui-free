import React, { ReactNode } from "react";
import BreadcrumbItem, { BreadcrumbItemProps } from "./BreadcrumbItem";
import BreadcrumbContext from "./BreadcrumbContext";

interface BreadcrumbsProps {
  children: ReactNode;
  divider?: ReactNode | string;
  activeClassName?: string;
  className?: string;
}
interface BreadcrumbComposition {
  Item: React.FC<BreadcrumbItemProps>;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> & BreadcrumbComposition = ({
  children,
  divider,
  activeClassName,
  className = "",
}) => {
  return (
    <BreadcrumbContext.Provider value={{ divider, activeClassName }}>
      <nav aria-label="breadcrumb">
        <ul className={`flex ${className}`}>{children}</ul>
      </nav>
    </BreadcrumbContext.Provider>
  );
};

Breadcrumbs.Item = BreadcrumbItem;

export default Breadcrumbs;
