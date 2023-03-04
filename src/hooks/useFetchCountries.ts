import { useState } from "react";

interface Country {
  name: {
    common: string;
  };
  flag: string;
}

export const useFetchCountries = () => {
  const [countries, setCountries] = useState<string[]>([]);

  const fetchCountries = async (term: string) => {
    const countriesData = await fetch(
      `https://restcountries.com/v3/name/${term}`
    ).then((res) => res.json());

    if (countriesData.status === 404) {
      setCountries([]);

      return;
    }

    // Filtering due to api not having a good filter by name and I was getting some unwanted results.
    const countries = countriesData
      .filter(({ name }: Country) =>
        name.common.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      )
      .map(({ name, flag }: Country) => `${name.common} ${flag}`);

    // Limiting to 10 results
    setCountries(countries.slice(0, 10));
  };

  return {
    countries,
    fetchCountries,
  };
};
