import React from "react";
import { RouteObject,createBrowserRouter } from "react-router-dom";
import Home from './pages/home/index';
// import  Logging from
//import  CreateInvectionnPage from 
//import  HowToParty from 
//import  ExploreEvent from 

const routes = createBrowserRouter([
    {
      path: "/", // 首頁
      element: <Home />,
    }, 
  ]);

export default routes