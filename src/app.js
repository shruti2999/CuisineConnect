import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body    from "./components/body";
//import { HydratedRouter ,RouterProvider} from "react-router-dom";
import About from "./components/About";  
import Home from "./components/Home";
import Card from "./components/Card";
import { BrowserRouter, Route } from "react-router-dom";



const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const appRouter = BrowserRouterr([
{
  path :"/",
  element:<AppLayout/>,
},
{
  path :"/home",
  element:<About/>,
}, 
{
  path :"/about",
  element:<About/>,
},  
{
  path :"/Contact",
  element:<Contact/>,
},   
{
  path :"/card",
  element:<Card/>,
},  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Route route={appRouter}/>);
