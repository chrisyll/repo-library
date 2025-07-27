import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  Box,
  Select,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { useState } from "react";
import { useContext } from "react";
import {
  RepositoryFiltersContext,
  resultOptions,
  sortDirections,
  sortFields,
  type ResultOption,
  type SortDirection,
  type SortField,
} from "../context/repositoryFiltersContext";

const FiltersMenu = () => {
  const {
    sortField,
    setSortField,
    sortDirection,
    setSortDirection,
    resultsPerPage,
    setResultsPerPage,
  } = useContext(RepositoryFiltersContext);

  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorElement);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <div className="w-3/6 flex justify-between m-auto">
      <Box>
        <IconButton onClick={handleOpen} aria-label="filter options">
          <TuneIcon />
        </IconButton>
        <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
          <MenuItem disabled>
            <Typography variant="subtitle2">Sort by</Typography>
          </MenuItem>
          <RadioGroup
            value={sortField}
            onChange={(e) => setSortField(e.target.value as SortField)}
          >
            {sortFields.map((field) => (
              <MenuItem key={field}>
                <FormControlLabel
                  value={field}
                  control={<Radio />}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                />
              </MenuItem>
            ))}
          </RadioGroup>
          <Divider />
          <MenuItem disabled>
            <Typography variant="subtitle2">Direction</Typography>
          </MenuItem>
          <RadioGroup
            value={sortDirection}
            onChange={(e) => setSortDirection(e.target.value as SortDirection)}
          >
            {sortDirections.map((direction) => (
              <MenuItem key={direction}>
                <FormControlLabel
                  value={direction}
                  control={<Radio />}
                  label={direction.charAt(0).toUpperCase() + direction.slice(1)}
                />
              </MenuItem>
            ))}
          </RadioGroup>
        </Menu>
      </Box>
      <div className="flex gap-2">
        <Typography>Results per page:</Typography>
        <Select
          value={resultsPerPage}
          onChange={(e) => setResultsPerPage(e.target.value as ResultOption)}
          sx={{ height: "28px" }}
        >
          {resultOptions.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export { FiltersMenu };
