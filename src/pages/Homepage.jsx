import React from "react";
import Navbar_cp from "../components/navbar-cp/P-Navbar-cp";
import Banner_cp from "../components/home-cp/P-Banner-cp";
import Categories_cp from "../components/home-cp/P-Categories-cp";
import Feedback_cp from "../components/home-cp/P-Feedback-cp";
import Footer_cp from "../components/footer-cp/P-Footer-cp";
export default function Homepage() {
    
    return (
        <>
            <Navbar_cp/>
            <Banner_cp/>
            <Categories_cp/>
            <Feedback_cp/>
            <Footer_cp/>
        </>
    )
}
