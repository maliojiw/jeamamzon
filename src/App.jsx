import React from "react";
import { Route ,BrowserRouter} from "react-router-dom";
import Router from "./router";
export default function App() {


  // consider use other framwork of design bootstrap mui daisyUi more than hardcode
  // beware of hardcode to a pixel it hard to do responsive 
  // the content should inharit with parent stlye 
  // do a mobile first concept tailwind css
  // why every div have id attribute 
  return (
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
  );
}