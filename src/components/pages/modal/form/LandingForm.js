import React from "react";
import Functionalities from "./Funcionalities";

export default function LandingForm({service}){
    return(
        <div>
            <h4 className="mt-3 text-center">Service : {service}</h4>
            <div className="row">
                <Functionalities/>
            </div>
        </div>
    )
}