import { TextInput } from "../TextInput/TextInput";
import "./AutoComplete.style.css";
import { ChangeEvent } from "react";
import { Results } from "./components/Results/Results";

interface AutoCompleteProps {
  value: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  results?: string[];
  placeholder: string;
  onSelect(value: string): void;
  onBlur(): void;
  autoFocus?: boolean;
}

export const AutoComplete = ({
  value,
  onChange,
  results = [],
  placeholder = "",
  onSelect,
  onBlur,
  autoFocus = false,
}: AutoCompleteProps) => {
  const shouldShowResults = results.length > 0 && value.length > 0;

  return (
    <div className="AutoComplete">
      <TextInput
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
      />
      {shouldShowResults && (
        <Results onSelect={onSelect} term={value} results={results} />
      )}
    </div>
  );
};
