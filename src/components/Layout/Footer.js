import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Lang } from "../../context/LangContext";

export default function Footer(){
    const {lang, uploadLang, getLang} = useContext(Lang);
    return(
        <div className="footer-style text-white">
            <div className="container">
                <div className="row py-3">
                    <div className="col-md-4 mt-3">
                        <h5><strong>Aymane Web-dev</strong></h5>
                        <p className="mt-5 fs-7">
                            <strong>{lang.phone || uploadLang.phone} : </strong> +212644776612 <br/>
                            <strong>{lang.service_contact_email || uploadLang.service_contact_email} : </strong> a.chnaif2010@gmail.com
                        </p>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h5><strong>{lang.useful_links || uploadLang.useful_links}</strong></h5>
                        <hr className="hr-style"/>
                        <div className="mt-4 fs-7">
                            {getLang === "ar" ? 
                                <FontAwesomeIcon icon={faChevronLeft} className="fs-8 ms-2" /> :
                                <FontAwesomeIcon icon={faChevronRight} className="fs-8 me-2" />
                            }
                            <a href="/" className="text-white ms-2 text-decoration-none">{lang.home || uploadLang.home}</a> 
                        </div>
                        <div className="mt-2 fs-7">
                            {getLang === "ar" ? 
                                <FontAwesomeIcon icon={faChevronLeft} className="fs-8 ms-2" /> :
                                <FontAwesomeIcon icon={faChevronRight} className="fs-8 me-2" />
                            }
                            <a href="/" className="text-white ms-2 text-decoration-none">{lang.about || uploadLang.about}</a> 
                        </div>
                        <div className="mt-2 fs-7">
                            {getLang === "ar" ? 
                                <FontAwesomeIcon icon={faChevronLeft} className="fs-8 ms-2" /> :
                                <FontAwesomeIcon icon={faChevronRight} className="fs-8 me-2" />
                            }
                            <a href="/" className="text-white ms-2 text-decoration-none">{lang.services || uploadLang.services}</a> 
                        </div>
                        <div className="mt-2 fs-7">
                            {getLang === "ar" ? 
                                <FontAwesomeIcon icon={faChevronLeft} className="fs-8 ms-2" /> :
                                <FontAwesomeIcon icon={faChevronRight} className="fs-8 me-2" />
                            }
                            <a href="/" className="text-white ms-2 text-decoration-none">{lang.terms || uploadLang.terms}</a> 
                        </div>
                        <div className="mt-2 fs-7">
                            {getLang === "ar" ? 
                                <FontAwesomeIcon icon={faChevronLeft} className="fs-8 ms-2" /> :
                                <FontAwesomeIcon icon={faChevronRight} className="fs-8 me-2" />
                            }
                            <a href="/" className="text-white ms-2 text-decoration-none">{lang.privacy || uploadLang.privacy}</a> 
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h5><strong>{lang.services || uploadLang.services}</strong></h5>
                        <hr className="hr-style"/>
                        <div className="mt-4 fs-7">
                            {getLang === "ar" ? 
                                <FontAwesomeIcon icon={faChevronLeft} className="fs-8 ms-2" /> :
                                <FontAwesomeIcon icon={faChevronRight} className="fs-8 me-2" />
                            }
                            <a href="/" className="text-white ms-2 text-decoration-none">{lang.landing || uploadLang.landing}</a> 
                        </div>
                        <div className="mt-2 fs-7">
                            {getLang === "ar" ? 
                                <FontAwesomeIcon icon={faChevronLeft} className="fs-8 ms-2" /> :
                                <FontAwesomeIcon icon={faChevronRight} className="fs-8 me-2" />
                            }
                            <a href="/" className="text-white ms-2 text-decoration-none">{lang.web || uploadLang.web}</a> 
                        </div>
                        <div className="mt-2 fs-7">
                            {getLang === "ar" ? 
                                <FontAwesomeIcon icon={faChevronLeft} className="fs-8 ms-2" /> :
                                <FontAwesomeIcon icon={faChevronRight} className="fs-8 me-2" />
                            }
                            <a href="/" className="text-white ms-2 text-decoration-none">{lang.mobile || uploadLang.mobile}</a> 
                        </div>
                        <div className="mt-2 fs-7">
                            {getLang === "ar" ? 
                                <FontAwesomeIcon icon={faChevronLeft} className="fs-8 ms-2" /> :
                                <FontAwesomeIcon icon={faChevronRight} className="fs-8 me-2" />
                            }
                            <a href="/" className="text-white ms-2 text-decoration-none">{lang.maintenance || uploadLang.maintenance}</a> 
                        </div>
                        <div className="mt-2 fs-7">
                            {getLang === "ar" ? 
                                <FontAwesomeIcon icon={faChevronLeft} className="fs-8 ms-2" /> :
                                <FontAwesomeIcon icon={faChevronRight} className="fs-8 me-2" />
                            }
                            <a href="/" className="text-white ms-2 text-decoration-none">{lang.plugin || uploadLang.plugin}</a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer-style text-white">
                <div className="container py-4">
                    <p className="text-center">
                        <FontAwesomeIcon icon={faCopyright} className={getLang === "ar" ? "ms-1 fs-7" : "me-1 fs-7"} /> 
                        {lang.copyright || uploadLang.copyright} <strong>Aymane web-dev</strong>. {lang.rights || uploadLang.rights}
                    </p>
                </div>
            </div>
        </div>
    )
}