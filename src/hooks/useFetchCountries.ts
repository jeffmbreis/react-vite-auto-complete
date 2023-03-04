import { useState } from "react";

interface Country {
  name: {
    common: string;
  };
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

    // Filtering reasons:
    // API don't have a good filter by name and I was getting some unwanted results
    // Avoid result equals to value
    const countries = countriesData
      .filter(({ name }: Country) => {
        const lowerName = name.common.toLocaleLowerCase();
        const lowerTerm = term.toLocaleLowerCase();

        return lowerName.includes(lowerTerm) && lowerName !== lowerTerm;
      })
      .map(({ name }: Country) => name.common);

    // Limiting to 10 results
    setCountries(countries.slice(0, 10));
  };

  const reset = () => {
    setCountries([]);
  };

  return {
    countries,
    fetchCountries,
    reset,
  };
};
