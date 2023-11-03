import React, { useContext } from "react";
import { serviceDescription } from "../data/ServiceDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBriefcase, faCommentDots, faFileCode, faFileLines, faGraduationCap, faMobileScreenButton, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { Lang } from "../../context/LangContext";
import ServiceModal from "./modal/ServiceModal";
import { ContextServices } from "../../context/ServiceContext";

export default function MyServices(){
    const {getLang, lang, uploadLang} = useContext(Lang);
    const {selectServiceModal} = useContext(ContextServices);
    return(
        <div className="pt-4 pb-3" id="services">
            <div className="text-center header-section position-relative">
                <h3 className="pb-3">{lang.my_services || uploadLang.my_services}</h3>
            </div>
            <div className="row">
                {serviceDescription.map((service, index)=>(
                    <div className="col-md-4 mt-3" key={service.key}>
                        <div className={
                            getLang === "fr" ? "card position-relative card-margin-fr border-0" : "card position-relative card-margin border-0"
                        }>
                            <div className="div-card-hover rounded">
                                <img src={service.image} className="card-img-top h-img" alt={service.image_alt}/>
                                <div className={
                                    getLang === "fr" ? "card-div-position mx-4 pb-5 card-height-fr" : "card-div-position mx-4 pb-5 card-height"
                                }>
                                    <div className="text-center font-service-style mx-auto">
                                        <FontAwesomeIcon 
                                            icon={
                                                service.key === "Landing" ? faFileLines : 
                                                service.key === "Portfolio/Business" ? faBriefcase : 
                                                service.key === "Blog" ? faCommentDots :
                                                service.key === "Ecommerce" ? faBagShopping :
                                                service.key === "Educational" ? faGraduationCap : 
                                                service.key === "Application" ? faFileCode :
                                                service.key === "Mobile" ? faMobileScreenButton :
                                                service.key === "Plugin" ? faWordpress :
                                                service.key === "Maintenance" ? faScrewdriverWrench : ""
                                            } 
                                            className="p-3 fs-2" 
                                        />
                                    </div>
                                    <h5 className="text-center header-margin">
                                        <strong>{
                                            getLang === "en" ? service.service_english :
                                            getLang === "fr" ? service.service_french : service.service_arabic
                                        }</strong>
                                    </h5>
                                    <div className="text-center">
                                        <button 
                                            className="btn btn-primary" 
                                            data-bs-toggle="modal" 
                                            data-bs-target="#service"
                                            onClick={selectServiceModal}
                                            id={service.key}
                                        >
                                            {lang.button_banner || uploadLang.button_banner}
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text opacity-100">{
                                            getLang === "en" ? service.service_description_english :
                                            getLang === "fr" ? service.service_description_french : service.service_description_arabic
                                        }<br/>
                                        {service.key === "Maintenance" && (getLang === "en" ? <strong>{service.service_bug_stacks_english}</strong> : 
                                            getLang === "fr" ? <strong>{service.service_bug_stacks_fernch}</strong> : 
                                            <strong>{service.service_bug_stacks_arabic}</strong>) 
                                        }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ServiceModal/>
        </div>
    )
}