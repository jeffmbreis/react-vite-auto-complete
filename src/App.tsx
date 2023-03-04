import { ChangeEvent, useState } from "react";
import "./App.style.css";
import { AutoComplete } from "./components/AutoComplete/AutoComplete";
import { useFetchCountries } from "./hooks/useFetchCountries";

function App() {
  const [value, setValue] = useState<string>("");
  const { countries, fetchCountries } = useFetchCountries();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    fetchCountries(value);
  };

  return (
    <div id="container">
      <AutoComplete results={countries} value={value} onChange={handleChange} />
    </div>
  );
}

export default App;
