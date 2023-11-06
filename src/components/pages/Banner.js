import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRightAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { Lang } from "../../context/LangContext";
import ServiceModal from "./modal/ServiceModal";
import { ContextServices } from "../../context/ServiceContext";

export default function Banner(){
    const {lang, getLang, uploadLang} = useContext(Lang);
    const {emptySelectServiceModal} = useContext(ContextServices);
    const text = lang.text_banner1 || uploadLang.text_banner1;
    const text_2 = lang.text_banner2 || uploadLang.text_banner2;
    const text_3 = lang.text_banner3 || uploadLang.text_banner3;
    const textParts = text.split('\n').map((part, index)=><div key={index}>{part}</div>);
    const textParts_2 = text_2.split('\n').map((part, index)=><div key={index}>{part}</div>);
    const textParts_3 = text_3.split('\n').map((part, index)=><div key={index}>{part}</div>);
    return(
        <div dir={getLang === "ar" ? "rtl" : "ltr"}>
            <div id="carouselExampleSlidesOnly" className="carousel slide position-relative" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="position-absolute top-0 start-0 bg-dark opacity-50 w-100 h-100"></div>
                        <img src="/images/business.jpg" className="d-block w-100 banner" alt="1"/>
                        <div className="position-absolute w-100 mx-auto px-3" style={{ top : "40%"}}>
                            <div className="d-flex justify-content-center text-fade">
                                {getLang === "ar" ? 
                                    <h1 className="text-white display-5"><FontAwesomeIcon icon={faQuoteRightAlt} /></h1> : 
                                    <h1 className="text-white display-5"><FontAwesomeIcon icon={faQuoteLeft} /></h1>
                                }
                                <h1 className="text-white text-center px-lg-2 px-1 mt-2 display-5">
                                    {textParts}
                                </h1>
                                {getLang === "ar" ? 
                                    <h1 className="text-white display-5"><FontAwesomeIcon icon={faQuoteLeft} /></h1> : 
                                    <h1 className="text-white display-5"><FontAwesomeIcon icon={faQuoteRightAlt} /></h1>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="position-absolute top-0 start-0 bg-dark opacity-50 w-100 h-100"></div>
                        <img src="/images/binary.jpg" className="d-block w-100 banner" alt="2"/>
                        <div className="position-absolute w-100 mx-auto px-3" style={{ top : "40%"}}>
                            <div className="d-flex justify-content-center">
                                {getLang === "ar" ? 
                                    <h1 className="text-white display-5"><FontAwesomeIcon icon={faQuoteRightAlt} /></h1> : 
                                    <h1 className="text-white display-5"><FontAwesomeIcon icon={faQuoteLeft} /></h1>
                                }
                                <h1 className="text-white text-center px-lg-2 px-1 mt-2 display-5">
                                    {textParts_2}
                                </h1>
                                {getLang === "ar" ? 
                                    <h1 className="text-white display-5"><FontAwesomeIcon icon={faQuoteLeft} /></h1> : 
                                    <h1 className="text-white display-5"><FontAwesomeIcon icon={faQuoteRightAlt} /></h1>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="position-absolute top-0 start-0 bg-dark opacity-50 w-100 h-100"></div>
                        <img src="/images/bullet.jpg" className="d-block w-100 banner" alt="3"/>
                        <div className="position-absolute w-100 mx-auto px-3" style={{ top : "40%"}}>
                            <div className="d-flex justify-content-center">
                                {getLang === "ar" ? 
                                    <h1 className="text-white display-5"><FontAwesomeIcon icon={faQuoteRightAlt} /></h1> : 
                                    <h1 className="text-white display-5"><FontAwesomeIcon icon={faQuoteLeft} /></h1>
                                }
                                <h1 className="text-white text-center px-lg-2 px-1 mt-2 display-5">
                                    {textParts_3}
                                </h1>
                                {getLang === "ar" ? 
                                    <h1 className="text-white display-5"><FontAwesomeIcon icon={faQuoteLeft} /></h1> : 
                                    <h1 className="text-white display-5"><FontAwesomeIcon icon={faQuoteRightAlt} /></h1>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="text-center position-absolute bottom-0 w-100 mx-auto m-btn">
                        <button 
                            className="btn btn-primary fs-5 py-2 px-3" 
                            data-bs-toggle="modal" 
                            data-bs-target="#service"
                            onClick={emptySelectServiceModal}
                        >
                            { lang.button_banner || uploadLang.button_banner }
                        </button>
                    </div>
                </div>
            </div>
            <ServiceModal/>
        </div>
    )
}