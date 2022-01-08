import logo from './logo.svg';
import './App.css';
import {Outlet} from "react-router-dom";
import React from "react";
import StickyFooter from "./Components/common/StickyFooter";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import Home from "./Views/Home";
import Footer from "./Components/common/Footer";
import Header from "./Components/common/Header";

export default function App() {

    const theme = createTheme();

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
