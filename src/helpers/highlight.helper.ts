export const highlight = (text: string, substring: string) => {
  return text.replace(
    new RegExp(substring, "gi"),
    (string) => `<span class="Highlight">${string}</span>`
  );
};
