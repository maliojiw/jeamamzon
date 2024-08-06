import React from "react";
import Navbar from "../components/P-Navbar";
import Banner from "../components/homepage/P-Banner";
import Categories from "../components/homepage/P-Categories";
import Feedback from "../components/homepage/P-Feedback";
import Footer from "../components/homepage/P-Footer";
export default function Home() {
    
    return (
        <>
            <Navbar/>
            <Banner/>
            <Categories/>
            <Feedback/>
            <Footer/>
        </>
    )
}
