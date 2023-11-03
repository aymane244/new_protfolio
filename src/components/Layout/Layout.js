import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import SelectLang from "./SelectLang";
import { Lang } from "../../context/LangContext";

export default function Layout(){
    const {lang, getLang, uploadLang} = useContext(Lang);
    return(
        <div dir={getLang === "ar" ? "rtl" : "ltr"}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Aymane Web-dev</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/">{lang.home || uploadLang.home}</Link>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link text-black">{lang.about || uploadLang.about}</a>
                            </li>
                            <li className="nav-item">
                                <a href="#services" className="nav-link text-black">{lang.services || uploadLang.services}</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects" className="nav-link text-black">{lang.projects || uploadLang.projects}</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link text-black">{lang.contact || uploadLang.contact}</a>
                            </li>
                        </ul>
                        <div className="px-lg-3 w-nav">
                            <SelectLang/>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}