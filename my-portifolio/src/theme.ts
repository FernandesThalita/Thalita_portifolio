import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#003140"
    },
  },
  typography: {
    fontFamily: "Segoe UI"
  }
});
theme = responsiveFontSizes(theme);
export default theme;