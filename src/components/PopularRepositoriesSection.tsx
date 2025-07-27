import { Typography, Button } from "@mui/material";
import type { Repository } from "../api/googleRepoAPI";
import { RepositoryCard } from "./RepositoryCard";

interface PopularRepositoriesSectionProps {
  repositories: Repository[];
  showAll: boolean;
  onToggle: () => void;
}

const PopularRepositoriesSection = ({
  repositories,
  showAll,
  onToggle,
}: PopularRepositoriesSectionProps) => {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 p-6 shadow-sm border border-gray-300 mb-12">
      <Typography variant="h6" className="text-gray-700 font-semibold">
        Popular Repositories
      </Typography>

      <div className="flex gap-4 w-full min-h-30 overflow-auto">
        {repositories.map((repo) => (
          <RepositoryCard data={repo} key={repo.id} size="small" />
        ))}
      </div>
      <Button
        onClick={() => onToggle()}
        variant="outlined"
        sx={{
          color: "#4b5563",
          borderColor: "#d1d5db",
          textTransform: "none",
        }}
      >
        {showAll ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export { PopularRepositoriesSection };
