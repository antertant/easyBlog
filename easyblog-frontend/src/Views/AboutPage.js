import {Container, CssBaseline} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/styles";
import Markdown from "markdown-to-jsx";
import Box from "@mui/material/Box";
import aboutMe from "../tempResources/aboutMe.md";

const md = aboutMe;

export default function AboutPage() {

    return (
        <Box mt={6} mx={5}>
            <Markdown children={md} options={{ forceBlock: true }} />
        </Box>
    );
}