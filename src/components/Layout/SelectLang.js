import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Lang } from "../../context/LangContext";
import { language } from "../../assets/lang/Languages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function SelectLang(){
    const {getLang, lang, changeLang, uploadLang} = useContext(Lang);
    const [showLang, setShowLang] = useState(false);
    const parentDivLang = useRef(null);
    const containerDivLang = useRef(null);
    function showDropDownLang(){
        setShowLang(!showLang);
    }
    const handleClickOutsideLang = useCallback(function (event){
        if(parentDivLang.current && !parentDivLang.current.contains(event.target)){
            if(containerDivLang.current && !containerDivLang.current.contains(event.target)){
                setShowLang(false);
            }
        }
    }, [setShowLang]);
    useEffect(()=>{
        document.body.addEventListener("click", handleClickOutsideLang, true);
        return ()=>{
            document.body.removeEventListener("click", handleClickOutsideLang, true);
        };
    }, [handleClickOutsideLang]);
    return(
        <div className="position-relative">
            <div 
                className="border rounded py-1 d-flex justify-content-between align-items-center cursor"
                ref={parentDivLang} 
                onClick={showDropDownLang}
            >
                <div className={getLang === "ar" ? "pe-2" : "ps-2"}>
                    {getLang === "en" || lang === "en" ? (lang.english || uploadLang.english) : 
                        getLang === "fr" || lang === "fr" ? (lang.french || uploadLang.french) : 
                        getLang === "ar" || lang === "ar" ? (lang.arabic || uploadLang.arabic) :
                        (lang.english || uploadLang.english)
                    }
                </div>
                <div className={getLang === "ar" ? "fs-7 ps-2" : "fs-7 pe-2"}>
                    {!showLang ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
                </div>
                {showLang && <div className="position-absolute border border-top-0 w-100 shadow z-3 bg-white position-select text-start" ref={containerDivLang}>
                    <div className="dropdown-hover-select">
                        {getLang === null ? language.filter(({code})=>code !== "en").map(({flag, label_english})=>(
                            <div 
                                key="en" 
                                className="d-flex justify-content-between px-2" 
                                id="en"
                                onClick={changeLang}
                            >
                                <img src={flag} alt="en" />
                                {label_english}
                            </div>
                        )) : language.filter(({code})=>code !== getLang).map(({code, flag, label_english, label_french, label_arabic})=>(
                            <div 
                                key={code} 
                                className="d-flex justify-content-between px-2" 
                                id={code}
                                onClick={changeLang}
                            >
                                <img src={flag} alt={code} />
                                {
                                    getLang === "en" || lang === "en" ? label_english : 
                                    getLang === "fr" || lang === "fr" ? label_french : 
                                    getLang === "ar" || lang === "ar" ? label_arabic :
                                    label_english            
                                }
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
        </div>
    )
}