import React from "react";
import Banner from "./pages/Banner";
import About from "./pages/About";
import ChooseMe from "./pages/ChooseMe";
import MyServices from "./pages/MyServices";
import MyProjects from "./pages/MyProjects";
import HireMe from "./pages/HireMe";
import ContactMe from "./pages/ContactMe";
import Footer from "./Layout/Footer";

export default function Home(){
    return(
        <div>
            <Banner/>
            <div style={{ backgroundColor : "#F3F5FA" }}>
                <div className="container-fluid">
                    <About/>
                    <ChooseMe/>
                </div>
                <div className="container">
                    <MyServices/>
                    <MyProjects/>
                    <HireMe/>
                    <ContactMe/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}