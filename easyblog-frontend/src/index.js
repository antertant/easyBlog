import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddEmployee from "./Components/AddEmployee";
import Table from "./Components/Table";

ReactDOM.render(
    // <App/>,
      <Router>
          <Routes>
              <Route path="/" element={<AddEmployee/>} />
              <Route path="/view" element={<Table/>}/>
          </Routes>
      </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
