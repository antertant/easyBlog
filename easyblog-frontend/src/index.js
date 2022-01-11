import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@fontsource/roboto";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Views/Home";
import AboutPage from "./Views/AboutPage";
import EducationPage from "./Views/EducationPage";
import ExperiencePage from "./Views/ExperiencePage";
import ProjectPage from "./Views/ProjectPage";
import Post from "./Components/blog/Post";

ReactDOM.render(
    // <App/>,
      <Router>
          <Routes>
              <Route path="/" element={<App/>}>
                  <Route index element={<Home/>}/>
                  <Route path="post/:id" element={<Post/>}/>
                  <Route path="about" element={<AboutPage/>}/>
                  <Route path="education" element={<EducationPage/>}/>
                  <Route path="experience" element={<ExperiencePage/>}/>
                  <Route path="project" element={<ProjectPage/>}/>
              </Route>
          </Routes>
      </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
