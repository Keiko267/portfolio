// theme.ts
import { createTheme } from "@mui/material/styles";
function overlay (base: string, color: string, opacity: number) {
  const hexToRgb = (hex:string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };
  return `linear-gradient(rgba(${hexToRgb(color)}, ${opacity}), rgba(${hexToRgb(color)}, ${opacity})), ${base})`;
}
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
      light: "#dc262699",
    },
    background: {
      default: "#121212", 
      paper: overlay("#121212", "EF4444", 0.08),
    },
    text: {
      primary: "#FFFFFF", 
      secondary: "#EF4444", 
    },
  },
});
