import {Container, CssBaseline} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/styles";

export default function AboutPage() {

    const theme = createTheme();

    return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          Hello World!
      </ThemeProvider>
    );
}