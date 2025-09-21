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
      light: "rgba(138,217,233,0.6)",
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
      light: "rgba(220,38,38,0.6)",
    },
    background: {
      default: "#131820", // Slightly more blackish than blue
      paper: "#1E293B",
    },
    text: {
      primary: "#FFFFFF", 
      secondary: "#EF4444", 
    },
  },
});
