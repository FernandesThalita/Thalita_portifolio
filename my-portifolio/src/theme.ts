import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: "#e4e3e3",
    },
    secondary: {
      main: "#d05ebc",
      dark: "#111"
    },
  },
  typography: {
    fontFamily: "Segoe UI"
  }
});
theme = responsiveFontSizes(theme);
export default theme;