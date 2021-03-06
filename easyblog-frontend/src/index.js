import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@fontsource/roboto";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Views/Home";
import AboutPage from "./Views/AboutPage";
import ExperiencePage from "./Views/ExperiencePage";
import ProjectPage from "./Views/ProjectPage";
import Post from "./Components/blog/Post";
import ResumePage from "./Views/ResumePage";
import NotFound from "./Views/NotFound";
import UserLogin from "./Views/UserLogin";
import DashBoardPage from "./Views/DashBoardPage";
import ChartPage from "./Components/dashboard/chart/ChartPage";
import DashBoardArticle from "./Components/dashboard/articles/DashBoardArticle";
import EditPage from "./Components/dashboard/edit/EditPage";
import AddNewPage from "./Components/dashboard/edit/AddNewPage";

ReactDOM.render(
    // <App/>,
      <Router>
          <Routes>
              <Route path="/" element={<App/>}>
                  <Route index element={<Home/>}/>
                  <Route path="post/:id" element={<Post/>}/>
                  <Route path="about" element={<AboutPage/>}/>
                  <Route path="experience" element={<ExperiencePage/>}/>
                  <Route path="project" element={<ProjectPage/>}/>
                  <Route path="resume" element={<ResumePage/>}/>
              </Route>
              <Route path={"/user"} element={<UserLogin/>} />
              <Route path={"/dashboard"} element={<DashBoardPage/>}>
                  <Route index element={<ChartPage/>}/>
                  <Route path={"articles"} element={<DashBoardArticle/>}/>
                  <Route path={"edit"} element={<EditPage/>}/>
                  <Route path={"addNewArticle"} element={<AddNewPage/>}/>
              </Route>
              <Route path={'*'} exact element={<NotFound/>}/>
          </Routes>
      </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
