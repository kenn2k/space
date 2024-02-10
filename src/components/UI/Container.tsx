import React, { ReactNode } from "react";
interface IContainer {
  children: ReactNode;
}
const Container = ({ children }: IContainer) => {
  return <div className="container px-5% mx-auto relative">{children}</div>;
};

export default Container;
