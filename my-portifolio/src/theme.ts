import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: "#d05ebc",
    },
    secondary: {
      main: "#d05ebc",
    },
  },
  typography: {
    fontFamily: "Segoe UI"
  }
});
theme = responsiveFontSizes(theme);
export default theme;