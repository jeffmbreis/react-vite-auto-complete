import { InputHTMLAttributes, KeyboardEvent, memo } from "react";
import "./TextInput.style.css";

export const TextInput = memo(
  (props: InputHTMLAttributes<HTMLInputElement>) => {
    const disabledKeys = ["ArrowUp", "ArrowDown"];
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (disabledKeys.includes(e.code)) {
        e.preventDefault();
      }
    };

    return (
      <input
        className="TextInput"
        onKeyDown={handleKeyDown}
        type="text"
        {...props}
      />
    );
  }
);
