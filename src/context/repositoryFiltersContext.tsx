import { createContext, useState, type PropsWithChildren } from "react";

const sortFields = ["name", "stars"] as const;
type SortField = (typeof sortFields)[number];

const sortDirections = ["ascending", "descending"] as const;
type SortDirection = (typeof sortDirections)[number];

const resultOptions = [16, 32] as const;
type ResultOption = (typeof resultOptions)[number];

interface RepositoryFiltersContextType {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  sortField: SortField;
  setSortField: React.Dispatch<React.SetStateAction<SortField>>;
  sortDirection: SortDirection;
  setSortDirection: React.Dispatch<React.SetStateAction<SortDirection>>;
  resultsPerPage: ResultOption;
  setResultsPerPage: React.Dispatch<React.SetStateAction<ResultOption>>;
}

const initialContext: RepositoryFiltersContextType = {
  searchInput: "",
  setSearchInput: () => {},
  sortField: "name",
  setSortField: () => {},
  sortDirection: "ascending",
  setSortDirection: () => {},
  resultsPerPage: 16,
  setResultsPerPage: () => {},
};

const RepositoryFiltersContext =
  createContext<RepositoryFiltersContextType>(initialContext);

const RepositoryFiltersProvider = ({ children }: PropsWithChildren) => {
  const [searchInput, setSearchInput] = useState("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] =
    useState<SortDirection>("ascending");
  const [resultsPerPage, setResultsPerPage] = useState<ResultOption>(16);

  return (
    <RepositoryFiltersContext.Provider
      value={{
        searchInput,
        setSearchInput,
        sortField,
        setSortField,
        sortDirection,
        setSortDirection,
        resultsPerPage,
        setResultsPerPage,
      }}
    >
      {children}
    </RepositoryFiltersContext.Provider>
  );
};

export {
  RepositoryFiltersContext,
  RepositoryFiltersProvider,
  sortFields,
  type SortField,
  sortDirections,
  type SortDirection,
  resultOptions,
  type ResultOption,
};
