import './App.css';
import {Outlet} from "react-router-dom";
import React, {useEffect} from "react";
import StickyFooter from "./Components/common/StickyFooter";
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Header from "./Components/common/Header";
import Box from "@mui/material/Box";

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#173243',
        },
        secondary: {
            main: '#907154',
        },
        info: {
            main: '#307086',
        },
        error: {
            main: '#b0788c',
        },
        success: {
            main: '#4caf50',
        },
    },
});

export default function App() {

    useEffect(() => {
        document.title = "Haocheng Wu";
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{minHeight: '100vh'}}>
                <CssBaseline/>
                <Header/>
                <Container maxWidth={"xl"}>
                    <Outlet/>
                </Container>
                <StickyFooter title={"EasyBlog"}/>
            </Box>
        </ThemeProvider>
        // <Router>
        //     <Routes>
        //         <Route exact path="/" element={<AddEmployee/>} />
        //         <Route exact path="/view" component={<Table/>}/>
        //     </Routes>
        // </Router>
    );
}
