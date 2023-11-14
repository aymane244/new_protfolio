import { faAward, faBookOpenReader, faBusinessTime, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Lang } from "../../context/LangContext";
import { useInView } from "react-intersection-observer";

export default function ChooseMe(){
    const {lang, getLang, uploadLang} = useContext(Lang);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    useEffect(()=>{
        if(inView){
            const elements = document.querySelectorAll('.fade-in_about');
            elements.forEach((element)=>{
                element.classList.add('fade-in-visible');
            });
        }
    }, [inView]);
    return(
        <div ref={ref} className="pt-5 fade-in_about">
            <div className="text-center header-section position-relative">
                <h3 className="pb-2">{lang.wokr_with_me || uploadLang.wokr_with_me}</h3>
            </div>
            <div className="row">
                <div className="col-md-6 mt-3 h-100">
                    <div className="card pb-lg-5 shadow border-0 rounded-0 card-animation">
                        <div className="card-body">
                            <h5><FontAwesomeIcon icon={faAward} className="fs-2 font-icon-color" /></h5>
                            <h5 className="card-title">
                                <strong>{lang.quality_header || uploadLang.quality_header}</strong>
                            </h5>
                            <p className="card-text">{lang.quality_text || uploadLang.quality_text}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-3 h-100">
                    <div className="card pb-lg-5 shadow border-0 rounded-0 card-animation">
                        <div className="card-body">
                            <h5><FontAwesomeIcon icon={faComments} className="fs-2 font-icon-color" /></h5>
                            <h5 className="card-title">
                                <strong>{lang.collaborative_header || uploadLang.collaborative_header}</strong>
                            </h5>
                            <p className="card-text">{lang.collaborative_text || uploadLang.collaborative_text}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-3 h-100">
                    <div className="card pb-lg-5 shadow border-0 rounded-0 card-animation">
                        <div className="card-body">
                            <h5><FontAwesomeIcon icon={faBusinessTime} className="fs-2 font-icon-color" /></h5>
                            <h5 className="card-title">
                                <strong>{lang.onTime_header || uploadLang.onTime_header}</strong>
                            </h5>
                            <p className="card-text">{lang.onTime_text || uploadLang.onTime_text}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-3 h-100">
                    <div className=
                        {
                            getLang === "ar" ? "card pb-lg-5 shadow border-0 rounded-0 card-animation" : 
                            "card pb-lg-4 shadow border-0 rounded-0 card-animation"
                        }
                    >
                        <div className="card-body">
                            <h5><FontAwesomeIcon icon={faBookOpenReader} className="fs-2 font-icon-color" /></h5>
                            <h5 className="card-title">
                                <strong>{lang.learning_header || uploadLang.learning_header}</strong>
                            </h5>
                            <p className="card-text">{lang.learning_text || uploadLang.learning_text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}