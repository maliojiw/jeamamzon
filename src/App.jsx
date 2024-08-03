import React from "react";
import Navbar from "./components/P-Navbar";
import Banner from "./components/page1/P-Banner";
import Categories from "./components/page1/P-Categories";
import Feedback from "./components/page1/P-Feedback";
import Footer from "./components/page1/P-Footer";
export default function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Categories/>
      <Feedback/>
      <Footer/> 
    </>
    
  );
}
