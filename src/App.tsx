import { ChangeEvent, useState } from "react";
import "./App.style.css";
import { AutoComplete } from "./components/AutoComplete/AutoComplete";
import { useFetchCountries } from "./hooks/useFetchCountries";

function App() {
  const [value, setValue] = useState<string>("");
  const { countries, fetchCountries, reset } = useFetchCountries();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    fetchCountries(value);
  };

  const handleSelect = (value: string) => {
    setValue(value);
    reset();
  };

  const handleBlur = () => {
    reset();
  };

  return (
    <div id="container">
      <AutoComplete
        placeholder="Type a Country name"
        results={countries}
        value={value}
        onChange={handleChange}
        onSelect={handleSelect}
        onBlur={handleBlur}
        autoFocus
      />
    </div>
  );
}

export default App;
