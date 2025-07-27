import { IconButton, Typography } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LastPageIcon from "@mui/icons-material/LastPage";

interface PageControls {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const PageControls = ({ page, setPage, totalPages }: PageControls) => {
  const handleFirstPageClicked = () => {
    if (page > 0) {
      setPage(0);
    }
  };

  const handlePreviousClicked = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextClicked = () => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  };

  const handleLastPageClicked = () => {
    if (page < totalPages - 1) {
      setPage(totalPages - 1);
    }
  };
  return (
    <div className="text-center flex justify-center items-center">
      <IconButton onClick={handleFirstPageClicked} disabled={page <= 0}>
        <FirstPageIcon />
      </IconButton>
      <IconButton onClick={handlePreviousClicked} disabled={page <= 0}>
        <ChevronLeftIcon />
      </IconButton>
      <Typography>{page + 1}</Typography>
      <IconButton onClick={handleNextClicked} disabled={page >= totalPages - 1}>
        <ChevronRightIcon />
      </IconButton>
      <IconButton
        onClick={handleLastPageClicked}
        disabled={page >= totalPages - 1}
      >
        <LastPageIcon />
      </IconButton>
    </div>
  );
};

export { PageControls };
