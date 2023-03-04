import { useDebounce } from "./useDebounce";
import { useEffect, useState } from "react";

interface Country {
  name: {
    common: string;
  };
}

export const useFetchCountries = (term: string) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const deboundedTerm = useDebounce(term);

  const reset = () => {
    setCountries([]);
  };

  useEffect(() => {
    const abortController = new AbortController();

    if (deboundedTerm) {
      setIsLoading(true);
      const fetchCountries = async () => {
        const countriesData = await fetch(
          `https://restcountries.com/v3/name/${deboundedTerm}`,
          { signal: abortController.signal }
        )
          .then((res) => res.json())
          .finally(() => setIsLoading(false));

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

      fetchCountries();

      return () => {
        abortController.abort();
      };
    }
  }, [deboundedTerm]);

  return {
    countries,
    reset,
    isLoading,
  };
};
