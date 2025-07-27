import {
  Card,
  CardContent,
  Box,
  Typography,
  CardActions,
  Collapse,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import { ExpandButton } from "./ExpandButton";
import { useState } from "react";

interface RepositoryCardProps {
  data: {
    name: string;
    stargazers_count: number;
    description: string | null;
    html_url: string;
  };
  size?: "normal" | "small";
}

const RepositoryCard = ({ data, size = "normal" }: RepositoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",

        width: size === "small" ? "280px" : "38%",
        minWidth: size === "small" ? "280px" : "38%",
      }}
      elevation={3}
    >
      <CardContent
        sx={{ padding: size === "small" ? "12px" : "16px", minHeight: "72px" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <CollectionsBookmarkOutlinedIcon
              sx={{ fontSize: size === "small" ? "16px" : "18px" }}
            />
            <Typography
              variant={size === "small" ? "subtitle1" : "h5"}
              sx={{
                color: "#0b69da",
                lineHeight: 1.2,
              }}
            >
              {data.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Typography
              sx={{
                fontSize: size === "small" ? "16px" : "18px",
                lineHeight: 1,
              }}
            >
              {data.stargazers_count}
            </Typography>
            <StarRateIcon
              sx={{ fontSize: size === "small" ? "14px" : "16px" }}
            />
          </Box>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
          padding: size === "small" ? "4px" : "8px",
        }}
      >
        <ExpandButton
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label="expand"
        />
      </CardActions>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{
            bgcolor: "#f9f9f9",
            padding: size === "small" ? "12px" : "16px",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginBottom: size === "small" ? "8px" : "16px",
              fontSize: size === "small" ? "0.8rem" : "0.875rem",
            }}
          >
            {data.description}
          </Typography>
          <Typography
            component="a"
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            variant="body2"
            sx={{
              color: "#1976d2",
              fontWeight: 500,
              fontSize: size === "small" ? "0.8rem" : "0.875rem",
            }}
          >
            {data.html_url}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export { RepositoryCard };
