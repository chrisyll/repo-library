import { Box, TextField } from "@mui/material";
import { useContext, useRef } from "react";
import { RepositoryFiltersContext } from "../context/repositoryFiltersContext";

const SearchBar = () => {
  const { searchInput, setSearchInput } = useContext(RepositoryFiltersContext);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = (input: string) => {
    setSearchInput(input);
  };

  const debouncedSearch = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    return (input: string) =>
      (timeoutRef.current = setTimeout(() => handleSearch(input), 300));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "16px" }}>
      <TextField
        variant="standard"
        placeholder="Search repositories"
        sx={{ width: "60%" }}
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          debouncedSearch()(e.target.value);
        }}
      />
    </Box>
  );
};

export { SearchBar };
