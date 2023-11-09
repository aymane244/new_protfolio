import { faFacebook, faGithub, faLinkedin, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Lang } from "../../context/LangContext";
import Accordion from "./accordion/Accordion";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AccordionLanguages from "./accordion/AccordionLanguages";
import { useInView } from "react-intersection-observer";

export default function HireMe(){
    const {uploadLang, getLang, lang} = useContext(Lang);
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange(){
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize', handleWindowSizeChange);
        return ()=>{
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const isMobile = width <= 768;
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
                    <div>
                        <h4 className="text-color">{lang.myName || uploadLang.myName}</h4>
                        <h5>{lang.fullStack || uploadLang.fullStack}</h5>
                        <FontAwesomeIcon icon={faEnvelope} /> :
                        a.chnaif2010@gmail.com
                        <hr className="w-25 mx-auto" />
                        <div className="d-flex justify-content-center my-4 fs-5 socials">
                            <a href="https://github.com/aymane244" className="text-color" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="border rounded-circle p-2 brand-hover" />
                            </a>
                            {isMobile && <a href="https://api.whatsapp.com/send?phone=+21244776612" className="text-color" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} className="border rounded-circle p-2 brand-hover" />
                            </a>}
                            <a href="https://web.facebook.com/aymane.chnaif" className="text-color" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="border rounded-circle p-2 brand-hover" />
                            </a>
                            <a href="https://twitter.com/AymaneChnaif" className="text-color" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faXTwitter} className="border rounded-circle p-2 brand-hover" />
                            </a>
                            <a href="https://www.linkedin.com/in/aimane-chnaif-692290232/" className="text-color" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="border rounded-circle p-2 brand-hover" />
                            </a>
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