import { useEffect, useState } from "react";
import { Result } from "../Result/Result";
import "./Results.style.css";

interface Resultsprops {
  results: string[];
  term: string;
  onSelect(value: string): void;
}

interface KeyboardEvent {
  code: string;
}

export const Results = ({ results, term, onSelect }: Resultsprops) => {
  const [preSelectedResult, setPreSelectedResult] = useState<number>(0);

  const handleSelect = (key: number) => {
    onSelect(results[key]);
  };

  const keyboardActions = {
    ArrowUp: () => {
      if (preSelectedResult > 0) {
        setPreSelectedResult((current) => current - 1);
      }
    },
    ArrowDown: () => {
      if (preSelectedResult < results.length - 1) {
        setPreSelectedResult((current) => current + 1);
      }
    },
    Enter: () => {
      handleSelect(preSelectedResult);
    },
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const keyFunction = keyboardActions[e.code as keyof typeof keyboardActions];

    if (keyFunction) {
      keyFunction();
    }
  };

  useEffect(() => {
    setPreSelectedResult(0);
  }, [term]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [preSelectedResult, results]);

  return (
    <div className="Results">
      {results.map((result, key) => (
        <Result
          preSelected={key === preSelectedResult}
          term={term}
          key={result}
          onClick={() => handleSelect(key)}
        >
          {result}
        </Result>
      ))}
    </div>
  );
};
