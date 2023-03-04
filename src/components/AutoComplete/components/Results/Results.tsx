import { ReactNode } from "react";
import "./Results.style.css";

interface Resultsprops {
  children: ReactNode;
}

export const Results = ({ children }: Resultsprops) => {
  return <div className="Results">{children}</div>;
};
