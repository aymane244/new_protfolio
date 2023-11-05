import React, { useEffect } from "react";
import { useContext } from "react";
import { Lang } from "../../context/LangContext";
import { useInView } from "react-intersection-observer";

export default function About(){
    const {lang, uploadLang} = useContext(Lang);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    useEffect(()=>{
        if(inView){
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((element)=>{
                element.classList.add('fade-in-visible');
            });
        }
    }, [inView]);
    return(
        <div ref={ref} className="pt-5 fade-in" id="about">
            <div className="text-center header-section position-relative">
                <h3 className="pb-2">{lang.about_header || uploadLang.about_header}</h3>
            </div>
            <div className="bg-white mt-3 p-3">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 text-center mt-3">
                        <img src="/images/my_image.png" alt="Aimane" className="img-fluid" style={{ width : "400px" }} />
                    </div>
                    <div className="col-md-6 mt-3">
                        <p className="text-justify fs-5 pe-5">
                            <strong>
                                {lang.about_text || uploadLang.about_text} <br/><br/>
                                {lang.about_text2 || uploadLang.about_text2} <br/><br/>
                                {lang.about_text3 || uploadLang.about_text3}
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}