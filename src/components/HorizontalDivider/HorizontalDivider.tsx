import { MUIStyles } from "@/@types";
import Divider from "@mui/material/Divider/Divider";

export const HorizontalDivider = () => {
  const dividerStyles: MUIStyles = {
    width: "100%",
    background: "var(--secondary-color)",
  };

  return <Divider sx={dividerStyles} />;
};
