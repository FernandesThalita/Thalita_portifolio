import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: "#f6f6f6",
    },
    secondary: {
      main: "#f5b83d"
    },
  },
  typography: {
    fontFamily: "Segoe UI"
  }
});
theme = responsiveFontSizes(theme);
export default theme;