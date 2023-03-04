import { ReactNode } from "react";
import "./Result.style.css";

interface Resultprops {
  children: ReactNode;
}

export const Result = ({ children }: Resultprops) => {
  return <div className="Result">{children}</div>;
};
