import { InputHTMLAttributes } from "react";
import "./TextInput.style.css";

export const TextInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className="TextInput" type="text" {...props} />;
};
