import type { JSX } from "react";
import type React from "react";
import { Outlet } from "react-router-dom";

export const CustomerLayout = ({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  return <>{children || <Outlet />}</>;
};
