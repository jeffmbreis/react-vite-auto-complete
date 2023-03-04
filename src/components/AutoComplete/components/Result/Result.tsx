import { memo, ReactNode } from "react";
import { highlight } from "../../../../helpers/highlight.helper";
import "./Result.style.css";

interface Resultprops {
  children: string;
  term: string;
  preSelected: boolean;
  onClick(): void;
}

export const Result = memo(
  ({ children, term, preSelected, onClick }: Resultprops) => {
    const highlightedText = highlight(children, term);

    return (
      <div
        onClick={onClick}
        className={`Result ${preSelected ? "Preselected" : ""}`}
      >
        <p dangerouslySetInnerHTML={{ __html: highlightedText }}></p>
      </div>
    );
  }
);
