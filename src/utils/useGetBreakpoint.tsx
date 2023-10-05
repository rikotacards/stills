import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export const useGetBreakpoints = (size: "xs" | "sm" | "md" | "lg" | "xl") => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(size));
  return matches;
};
