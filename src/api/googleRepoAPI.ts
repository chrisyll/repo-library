import { githubAPI } from "./axios";

interface Repository {
  id: number;
  name: string;
  stargazers_count: number;
  description: string | null;
  html_url: string;
}

const getGoogleRepos = async (page: number = 1): Promise<Repository[]> => {
  const response = await githubAPI.get("/users/google/repos", {
    params: {
      per_page: 100,
      page,
    },
  });

  return response.data;
};

export { getGoogleRepos, type Repository };
