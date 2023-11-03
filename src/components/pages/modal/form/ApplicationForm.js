import React from "react";
import PagesAdded from "./PagesAdded";
import Functionalities from "./Funcionalities";

export default function ApplicationForm({service}){
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