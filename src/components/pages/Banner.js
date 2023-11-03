import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRightAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { Lang } from "../../context/LangContext";
import ServiceModal from "./modal/ServiceModal";
import { ContextServices } from "../../context/ServiceContext";

export default function Banner(){
    const {lang, getLang, uploadLang} = useContext(Lang);
    const {emptySelectServiceModal} = useContext(ContextServices);
    const [text, setText] = useState(lang.text_banner1 || uploadLang.text_banner1);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setText((prevText)=>{
                if(prevText === (lang.text_banner1 || uploadLang.text_banner1) || prevText === (uploadLang.text_banner1 || lang.text_banner1)){
                    return lang.text_banner2 || uploadLang.text_banner2;
                }else if(prevText === (lang.text_banner2 || uploadLang.text_banner2) || prevText === (uploadLang.text_banner2 || lang.text_banner2)){
                    return lang.text_banner2 || uploadLang.text_banner3;
                }else if(prevText === (lang.text_banner3 || uploadLang.text_banner3) || prevText === (uploadLang.text_banner3 || lang.text_banner3)){
                    return lang.text_banner3 || uploadLang.text_banner1;
                }
            })
        }, 6000);
        return()=> clearInterval(interval);
    }, [lang.text_banner1, lang.text_banner2, lang.text_banner3, uploadLang.text_banner1, uploadLang.text_banner2, uploadLang.text_banner3]);
    const textParts = text.split('\n').map((part, index)=><div key={index}>{part}</div>);
    return(
        <div dir={getLang === "ar" ? "rtl" : "ltr"}>
            <div className="position-relative justify-content-center d-flex">
                <div className="position-absolute top-0 start-0 bg-dark opacity-50 w-100 h-100"></div>
                <img src="/images/business.jpg" alt="banner" className="w-100 banner" />
                <div className="position-absolute top-50 ">
                    <div className="d-flex">
                        {getLang === "ar" ? 
                            <h2 className="text-white"><FontAwesomeIcon icon={faQuoteRightAlt} /></h2> : 
                            <h2 className="text-white"><FontAwesomeIcon icon={faQuoteLeft} /></h2>
                        }
                        <h2 className="text-white text-center px-lg-2 px-1 mt-2">
                            {textParts}
                        </h2>
                        {getLang === "ar" ? 
                            <h2 className="text-white"><FontAwesomeIcon icon={faQuoteLeft} /></h2> : 
                            <h2 className="text-white"><FontAwesomeIcon icon={faQuoteRightAlt} /></h2>
                        }
                    </div>
                    <div className="text-center mt-5">
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