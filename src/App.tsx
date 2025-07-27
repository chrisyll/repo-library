import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home";
import { StyledEngineProvider } from "@mui/material";
import { RepositoryFiltersProvider } from "./context/repositoryFiltersContext";

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <StyledEngineProvider>
        <RepositoryFiltersProvider>
          <Home />
        </RepositoryFiltersProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
};

export { App };
