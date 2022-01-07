import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Table from "./Components/Table";
import AddEmployee from "./Components/AddEmployee";
import React, {Component} from "react";

class App extends Component {
  render() {
    return (
        <div>
            <p>
                hello
            </p>
        </div>
        // <Router>
        //     <Routes>
        //         <Route exact path="/" element={<AddEmployee/>} />
        //         <Route exact path="/view" component={<Table/>}/>
        //     </Routes>
        // </Router>
    )
  }
}

export default App;
