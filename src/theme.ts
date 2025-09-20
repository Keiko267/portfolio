// theme.ts
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1E293B",
    },
    secondary: {
      main: "#8ad9e9ff",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF", 
    },
    text: {
      primary: "#111827",
      secondary: "#8ad9e9ff", 
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0F172A",
    },
    secondary: {
      main: "#EF4444",
    },
    background: {
      default: "#111111",
      paper: "#1C1C1C",
    },
    text: {
      primary: "#FFFFFF", 
      secondary: "#EF4444", 
    },
  },
});
