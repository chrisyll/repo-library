import { Alert, CircularProgress } from "@mui/material";
import { useGetGoogleRepos } from "../hooks/useGetGoogleRepos";
import { useContext, useMemo, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { RepositoryCard } from "../components/RepositoryCard";
import { RepositoryFiltersContext } from "../context/repositoryFiltersContext";
import { FiltersMenu } from "../components/FiltersMenu";
import type { Repository } from "../api/googleRepoAPI";
import { PopularRepositoriesSection } from "../components/PopularRepositoriesSection";
import { PageControls } from "../components/PageControls";

const Home = () => {
  const { searchInput, sortField, sortDirection, resultsPerPage } = useContext(
    RepositoryFiltersContext
  );

  const [showAll, setShowAll] = useState(false);
  const [page, setPage] = useState(0);

  const { data, isLoading, isError } = useGetGoogleRepos(page);

  const handleSorting = (d: Repository[]) => {
    return [...d].sort((a, b) => {
      switch (sortField) {
        case "name":
          return sortDirection === "ascending"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);

        case "stars":
          return sortDirection === "ascending"
            ? a.stargazers_count - b.stargazers_count
            : b.stargazers_count - a.stargazers_count;

        default:
          return 0;
      }
    });
  };

  const filteredData = useMemo(() => {
    if (!data) return [];

    const filtered = data.filter((repo) =>
      repo.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const sorted = handleSorting(filtered);

    return sorted;
  }, [searchInput, data, sortField, sortDirection]);

  const totalPages = filteredData
    ? Math.ceil(filteredData?.length / resultsPerPage)
    : 0;

  const paginatedData = useMemo(() => {
    return filteredData?.slice(
      page * resultsPerPage,
      (page + 1) * resultsPerPage
    );
  }, [filteredData, page, resultsPerPage]);

  const popularRepositories = useMemo(() => {
    const popularRepos = data
      ? data.filter((d) => d.stargazers_count > 1000)
      : [];

    return showAll ? popularRepos : popularRepos.slice(0, 5);
  }, [data, showAll]);

  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress />
      </div>
    );

  if (isError)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Alert severity="error">
          Oups! Something went wrong. Please{" "}
          <span
            className="font-medium text-blue-500 cursor-pointer"
            role="button"
            onClick={() => window.location.reload()}
          >
            refresh
          </span>{" "}
          the page and try again
        </Alert>
      </div>
    );

  return (
    <div className="p-8 flex flex-col gap-6">
      <PopularRepositoriesSection
        repositories={popularRepositories}
        showAll
        onToggle={() => setShowAll(!showAll)}
      />
      <SearchBar />
      <FiltersMenu />
      <div className="flex flex-col items-center gap-8">
        {paginatedData?.map((d: any) => (
          <RepositoryCard data={d} key={d.id} />
        ))}
      </div>
      <PageControls page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export { Home };
