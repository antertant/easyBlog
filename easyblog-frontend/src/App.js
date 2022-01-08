import logo from './logo.svg';
import './App.css';
import {Outlet} from "react-router-dom";
import React from "react";
import StickyFooter from "./Components/common/StickyFooter";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {ThemeOptions} from "@mui/material/styles";
import Home from "./Views/Home";
import Footer from "./Components/common/Footer";
import Header from "./Components/common/Header";

export default function App() {

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
                main: '#2196f3',
            },
            error: {
                main: '#b0788c',
            },
            success: {
                main: '#4caf50',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Outlet/>
            <StickyFooter title={"EasyBlog"} />
        </ThemeProvider>
        // <Router>
        //     <Routes>
        //         <Route exact path="/" element={<AddEmployee/>} />
        //         <Route exact path="/view" component={<Table/>}/>
        //     </Routes>
        // </Router>
    );
}
