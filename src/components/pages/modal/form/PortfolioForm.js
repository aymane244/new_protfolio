import React from "react";
import Functionalities from "./Funcionalities";
import PagesAdded from "./PagesAdded";

export default function PortfolioForm({service}){
    return(
        <div>
            <h4 className="mt-3 text-center">Service : {service}</h4>
            <div className="row">
                <PagesAdded/>
            </div>
            <div className="row">
                <Functionalities/>
            </div>
        </div>
    )
}