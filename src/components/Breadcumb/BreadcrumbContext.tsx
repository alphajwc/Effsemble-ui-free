import { ReactNode, createContext } from "react";

interface BreadcrumbContextProps {
  divider?: ReactNode | string;
  activeClassName?: string;
}

const BreadcrumbContext = createContext<BreadcrumbContextProps | null>(null);

export default BreadcrumbContext;
