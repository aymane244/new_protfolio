import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Layout from "./Layout";
import ServiceContext from "../../context/ServiceContext";

export default function Navbar(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index 
                            element={
                                <ServiceContext>
                                    <Home/>
                                </ServiceContext>
                            } 
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}