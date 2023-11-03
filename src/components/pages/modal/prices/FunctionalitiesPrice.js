import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { ContextServices } from "../../../../context/ServiceContext";
import { Lang } from "../../../../context/LangContext";

export default function FuncionalitiesPrice(){
    const {sum, services} = useContext(ContextServices);
    const {lang, uploadLang} = useContext(Lang);
    function capitalizeFirstLetter(str){
        if(str.includes("\n")){
            const lines = str.split("\n");
            const capitalizedLines = lines.map((line)=>{
                return str && "- " + line.charAt(0).toUpperCase() + line.slice(1).toLowerCase();
            });
            return capitalizedLines.join("\n");
        }else{
            return str && "- " + str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
    }
    return(
        <div className="d-flex justify-content-between align-items-center">
            <div className="me-2">
                <span><strong><FontAwesomeIcon icon={faListCheck} /> {lang.functionalities || uploadLang.functionalities}:</strong></span>
            </div>
            <div>
                {services.map((service, index)=>(<div key={index}>  
                    <span className="wrap">
                        <strong>
                            {service.servicePrice > 0 ? "- "+service.service : ""} {service.servicePrice > 0 ? "("+service.servicePrice : ""} 
                            {service.servicePrice > 0 ? (lang.dollar || uploadLang.dollar)+")" : ""}
                            {service.type === "other" && capitalizeFirstLetter(service.service)}
                        </strong>
                    </span>
                </div>))}
            </div>
            <div>
                <span><strong>{sum} {lang.dollar || uploadLang.dollar}</strong></span>
            </div>
        </div>
    )
}