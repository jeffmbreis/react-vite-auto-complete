import { TextInput } from "../TextInput/TextInput";
import "./AutoComplete.style.css";
import { ChangeEvent } from "react";
import { Results } from "./components/Results/Results";
import { Result } from "./components/Result/Result";

interface AutoCompleteProps {
  value: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  results: string[];
}

export const AutoComplete = ({
  value,
  onChange,
  results,
}: AutoCompleteProps) => {
  const showResults = results.length > 0 && value.length > 0;

  return (
    <div className="AutoComplete">
      <TextInput value={value} onChange={onChange} />
      {showResults && (
        <Results>
          {results.map((result) => (
            <Result key={result}>{result}</Result>
          ))}
        </Results>
      )}
    </div>
  );
};
