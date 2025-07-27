import { useQuery } from "@tanstack/react-query";
import { getGoogleRepos } from "../api/googleRepoAPI";

const useGetGoogleRepos = (page: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["googleRepos"],
    queryFn: () => getGoogleRepos(page),
  });

  return { data, isLoading, isError };
};

export { useGetGoogleRepos };
