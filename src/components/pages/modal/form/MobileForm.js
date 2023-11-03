import React from "react";
import PagesAdded from "./PagesAdded";

export default function MobileForm({service}){
    return(
        <div>
            <h4 className="mt-3 text-center">Service : {service}</h4>
            <div className="row">
                <PagesAdded/>
            </div>
        </div>
    )
}