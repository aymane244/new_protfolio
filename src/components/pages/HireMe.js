import { faFacebook, faGithub, faLinkedin, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { Lang } from "../../context/LangContext";
import Accordion from "./accordion/Accordion";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AccordionLanguages from "./accordion/AccordionLanguages";
import { useInView } from "react-intersection-observer";

export default function HireMe(){
    const {uploadLang, getLang, lang} = useContext(Lang);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    useEffect(()=>{
        if(inView){
            const elements = document.querySelectorAll('.slide-in_hire');
            elements.forEach((element)=>{
                element.classList.add('slide-in-visible');
            });
        }
    }, [inView]);
    return(
        <div ref={ref} className="pt-5 slide-in_hire">
            <div className="text-center header-section position-relative">
                <h3 className="pb-2">{lang.hire || uploadLang.hire}</h3>
            </div>
            <div className="row bg-white shadow mt-3">
                <div className="text-center text-secondary px-5 py-3">
                    <strong>
                        {lang.hire_text_1 || uploadLang.hire_text_1}<br/>
                        {lang.hire_text_2 || uploadLang.hire_text_2}<br/>
                        {lang.hire_text_3 || uploadLang.hire_text_3}
                    </strong>
                </div>
                <hr/>
                <div className="col-md-12 px-5 py-3 text-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <div>
                            <img src="/images/aimane.png" alt="aimane-profile" className="img-fluid rounded-circle img-size" />
                        </div>
                        <div className="ms-3">
                            <h4 className="text-color">{lang.myName || uploadLang.myName}</h4>
                            <h5>{lang.fullStack || uploadLang.fullStack}</h5>
                            <FontAwesomeIcon icon={faEnvelope} /> :
                            a.chnaif2010@gmail.com
                            <hr className="w-25 mx-auto" />
                            <div className="d-flex justify-content-center my-4 fs-5 socials">
                                <a href="/" className="text-color">
                                    <FontAwesomeIcon icon={faGithub} className="border rounded-circle p-2 brand-hover" />
                                </a>
                                <a href="/" className="text-color">
                                    <FontAwesomeIcon icon={faWhatsapp} className="border rounded-circle p-2 brand-hover" />
                                </a>
                                <a href="/" className="text-color">
                                    <FontAwesomeIcon icon={faFacebook} className="border rounded-circle p-2 brand-hover" />
                                </a>
                                <a href="/" className="text-color">
                                    <FontAwesomeIcon icon={faXTwitter} className="border rounded-circle p-2 brand-hover" />
                                </a>
                                <a href="/" className="text-color">
                                    <FontAwesomeIcon icon={faLinkedin} className="border rounded-circle p-2 brand-hover" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="col-md-12 px-5 pb-3">
                    <h5 className="text-center"><strong>{lang.skills || uploadLang.skills}: </strong></h5>
                </div>
                <div className="col-md-6 px-5 py-3 text-center">
                    <Accordion
                        getLang = {getLang}
                        lang = {lang}
                        uploadLang = {uploadLang}
                    />
                </div>
                <div className="col-md-6 px-5 py-3 text-center">
                    <AccordionLanguages
                        getLang = {getLang}
                        lang = {lang}
                        uploadLang = {uploadLang}
                    />
                </div>
            </div>
        </div>
    )
}