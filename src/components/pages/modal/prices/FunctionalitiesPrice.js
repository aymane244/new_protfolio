import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { ContextServices } from "../../../../context/ServiceContext";
import { Lang } from "../../../../context/LangContext";

export default function FuncionalitiesPrice(){
    const {sum, services, languages} = useContext(ContextServices);
    const {lang, uploadLang} = useContext(Lang);
    // function capitalizeFirstLetter(str){
    //     if(str.includes("\n")){
    //         const lines = str.split("\n");
    //         const capitalizedLines = lines.map((line)=>{
    //             return str && "- " + line.charAt(0).toUpperCase() + line.slice(1).toLowerCase();
    //         });
    //         return capitalizedLines.join("\n");
    //     }else{
    //         return str && "- " + str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    //     }
    // }
    return(
        <div className="d-flex justify-content-between align-items-center">
            <div className="me-2 d-flex">
                <span className="me-2"><FontAwesomeIcon icon={faListCheck} /></span> 
                <span><strong>{lang.functionalities || uploadLang.functionalities}:</strong></span>
            </div>
            <div>
                {services.map((service, index)=>(<div key={index}>  
                    <span className="wrap">
                        <strong className="d-flex">
                            {service.servicePrice > 0 && <span className="me-2">-</span>} {service.servicePrice > 0 ? service.service : ""} {service.servicePrice > 0 ? "("+service.servicePrice : ""} 
                            {service.servicePrice > 0 ? (lang.dollar || uploadLang.dollar+(service.type === "multilingue" ? "/" + 
                                (languages.length + " " + (languages.length > 1 ? lang.lang_websites || uploadLang.lang_websites
                                : lang.lang_website || uploadLang.lang_website)) : ""))+")" : ""
                            }
                        </strong>
                    </span>
                </div>))}
                {languages.length > 0 && (
                    <>
                        <span className="ps-3">
                            <strong>
                                {languages.map((item, index)=>(
                                    <span className="pe-2" key={index}>
                                        {item.languageSelect && item.languageSelect + ","}
                                    </span>
                                ))}
                            </strong>
                        </span>
                    </>
                )}
            </div>
            <div>
                <span><strong>{sum} {lang.dollar || uploadLang.dollar}</strong></span>
            </div>
        </div>
    )
}