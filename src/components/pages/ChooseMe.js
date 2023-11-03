import { faAward, faBookOpenReader, faBusinessTime, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import { Lang } from "../../context/LangContext";

export default function ChooseMe(){
    const {lang, getLang, uploadLang} = useContext(Lang);
    return(
        <div className="pt-4 pb-3">
            <div className="text-center header-section position-relative">
                <h3 className="pb-3">{lang.wokr_with_me || uploadLang.wokr_with_me}</h3>
            </div>
            <div className="row">
                <div className="col-md-3 mt-3">
                    <div className=
                        {   
                            getLang === "en" ? "card pb-lg-4 shadow border-0 rounded-0 card-animation" : 
                            getLang === "fr" ? "card pb-lg-5 shadow border-0 rounded-0 card-animation" : "card shadow border-0 rounded-0 card-animation"
                        }
                    >
                        <div className="card-body">
                            <h5><FontAwesomeIcon icon={faAward} className="fs-2 font-icon-color" /></h5>
                            <h5 className="card-title">
                                <strong>{lang.quality_header || uploadLang.quality_header}</strong>
                            </h5>
                            <p className="card-text">{lang.quality_text || uploadLang.quality_text}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className={getLang === "ar" ? 
                            "card shadow border-0 rounded-0 card-animation" : 
                            "card pb-lg-4 shadow border-0 rounded-0 card-animation"
                        }
                    >
                        <div className="card-body">
                            <h5><FontAwesomeIcon icon={faComments} className="fs-2 font-icon-color" /></h5>
                            <h5 className="card-title">
                                <strong>{lang.collaborative_header || uploadLang.collaborative_header}</strong>
                            </h5>
                            <p className="card-text">{lang.collaborative_text || uploadLang.collaborative_text}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className=
                        {   
                            getLang === "en" ? "card pb-lg-4 shadow border-0 rounded-0 card-animation" : 
                            getLang === "fr" ? "card pb-lg-5 shadow border-0 rounded-0 card-animation" : "card shadow border-0 rounded-0 card-animation"
                        }
                    >
                        <div className="card-body">
                            <h5><FontAwesomeIcon icon={faBusinessTime} className="fs-2 font-icon-color" /></h5>
                            <h5 className="card-title">
                                <strong>{lang.onTime_header || uploadLang.onTime_header}</strong>
                            </h5>
                            <p className="card-text">{lang.onTime_text || uploadLang.onTime_text}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card shadow border-0 rounded-0 card-animation">
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