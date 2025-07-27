import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, styled, type IconButtonProps } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

interface ExpandButtonProps extends IconButtonProps {
  isExpanded: boolean;
}

const ExpandButton = ({ isExpanded, ...props }: ExpandButtonProps) => {
  return (
    <ExpandMore expand={isExpanded} {...props}>
      <ExpandMoreIcon />
    </ExpandMore>
  );
};

export { ExpandButton };
