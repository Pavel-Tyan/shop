import { ReactNode } from "react";

export interface LayoutProps {
  hasDrawer: boolean;
  toggleDrawer?: () => void;
  children: ReactNode;
}
