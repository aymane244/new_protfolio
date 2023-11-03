import React, {useCallback, useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faClipboard, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ContextServices } from "../../../../context/ServiceContext";
import { Lang } from "../../../../context/LangContext";

export default function Functionalities(){
    const {checkService, value, setOtherServiceValue, otherService, textKey, selectedServiceModal} = useContext(ContextServices);
    const {lang, getLang, uploadLang} = useContext(Lang);
    const [show, setShow] = useState(false);
    let multilingue = (textKey !== "Landing" || selectedServiceModal === "Landing") ? 
    (lang.multiling_website || uploadLang.multiling_website) : (lang.multiling_page || uploadLang.multiling_page);
    const containerDiv = useRef(null);
    const parentDiv = useRef(null);
    function showDropDown(){
        setShow(!show);
    }
    const handleClickOutside = useCallback(function (event){
        if(parentDiv.current && !parentDiv.current.contains(event.target)){
            if(containerDiv.current && !containerDiv.current.contains(event.target)){
                setShow(false);
            }
        }
    }, [setShow]);
    useEffect(()=>{
        document.body.addEventListener("click", handleClickOutside, true);
        return ()=>{
            document.body.removeEventListener("click", handleClickOutside, true);
        };
    }, [handleClickOutside]);
    console.log(parentDiv.current);
    return(
        <div className="col-md-12 mb-2 mt-3">
            <div className="row align-items-center">
                <div className="col-md-3">                
                    <label className="form-label">
                        {lang.functionlities_add || uploadLang.functionlities_add}: 
                    </label>
                </div>    
                <div className="col-md-9 position-relative">
                    <div 
                        className={getLang === "ar" ? "border text-center rounded py-1 d-flex justify-content-between ps-3 align-items-center cursor" :
                        "border text-center rounded py-1 d-flex justify-content-between pe-3 align-items-center cursor"}
                        ref={parentDiv} 
                        onClick={showDropDown}
                    >
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faClipboard} className={getLang === "ar" ? "position-absolute pe-3 fs-5" : "position-absolute ps-3 fs-5"}/>
                            <span className={getLang === "ar" ? "pe-5" : "ps-5"}>
                                -- {lang.functionlities_select || uploadLang.functionlities_select} --
                            </span>
                        </div>
                        <span className="fs-7">
                            {!show ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
                        </span>
                    </div>
                    {show && <div className="position-absolute border border-top-0 style-dropdown shadow z-3 bg-white position" ref={containerDiv}>
                        <div className="dropdown-hover overflow-y-auto">
                            {textKey !== "Ecommerce" && <div className="d-flex align-items-center">
                                <input 
                                    type="checkbox" 
                                    className={getLang === "ar" ? "form-check-input ms-2" : "form-check-input me-2"}
                                    id="checkResponsive" 
                                    name="responsive"
                                    onChange={(event)=>checkService(event, (lang.responsive_service || uploadLang.responsive_service), 100)}
                                    checked={value.responsive || ""}
                                /> 
                                <label className="form-check-label pointer" htmlFor="checkResponsive">
                                    {lang.responsive_service || uploadLang.responsive_service} (100 {lang.dollar || uploadLang.dollar})
                                </label>
                            </div>}
                            <div className="d-flex align-items-center">
                                <input 
                                    type="checkbox" 
                                    className={getLang === "ar" ? "form-check-input ms-2" : "form-check-input me-2"}
                                    id="checkNewsLetter"
                                    name="newsLetter"
                                    onChange={(event)=>checkService(event, (lang.newsLetter_service || uploadLang.newsLetter_service), 200)}
                                    checked={value.newsLetter || ""}
                                /> 
                                <label className="form-check-label pointer" htmlFor="checkNewsLetter">
                                    {lang.newsLetter_service || uploadLang.newsLetter_service} (200 {lang.dollar || uploadLang.dollar})
                                </label>
                            </div>
                            <div className="d-flex align-items-center">
                                <input 
                                    type="checkbox" 
                                    className={getLang === "ar" ? "form-check-input ms-2" : "form-check-input me-2"}
                                    id="checkSEO"
                                    name="SEO"
                                    onChange={(event)=>checkService(event, (lang.seo_service || uploadLang.seo_service), 100)}
                                    checked={value.SEO || ""}
                                /> 
                                <label className="form-check-label pointer" htmlFor="checkSEO">
                                    {lang.seo_service || uploadLang.seo_service} (100 {lang.dollar || uploadLang.dollar})
                                </label>
                            </div>
                            {((textKey === "Landing") || (textKey ==="Portfolio/Business")) && <div className="d-flex align-items-center">
                                <input 
                                    type="checkbox" 
                                    className={getLang === "ar" ? "form-check-input ms-2" : "form-check-input me-2"} 
                                    id="checkAdmin"
                                    name="admin"
                                    onChange={(event)=>checkService(event, (lang.admin_service || uploadLang.admin_service), 250)}
                                    checked={value.admin || ""}
                                /> 
                                <label className="form-check-label pointer" htmlFor="checkAdmin">
                                    {lang.admin_service || uploadLang.admin_service} (250 {lang.dollar || uploadLang.dollar})
                                </label>
                            </div>}
                            <div className="d-flex align-items-center">
                                <input 
                                    type="checkbox" 
                                    className={getLang === "ar" ? "form-check-input ms-2" : "form-check-input me-2"}
                                    id="checkMultilingue"
                                    name="multilingue"
                                    onChange={(event)=>checkService(event, multilingue, 150)}
                                    checked={value.multilingue || ""}
                                /> 
                                <label className="form-check-label pointer" htmlFor="checkMultilingue">
                                    {multilingue} (150 {lang.dollar || uploadLang.dollar})
                                </label>
                            </div>
                            <div className="d-flex align-items-center">
                                <input 
                                    type="checkbox" 
                                    className={getLang === "ar" ? "form-check-input ms-2" : "form-check-input me-2"}
                                    id="checkOther"
                                    name="other"
                                    onChange={(event)=>checkService(event, (lang.other_service || uploadLang.other_service), 0)}
                                    checked={value.other || ""}
                                /> 
                                <label className="form-check-label pointer" htmlFor="checkOther">
                                    {lang.other_service || uploadLang.other_service} ({lang.other_discuss || uploadLang.other_discuss})
                                </label>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
            {value.other && <div className={getLang === "ar" ? "form-floating form-floating-ar my-3 mt-1" : "form-floating my-3"}>
                <textarea 
                    className="form-control floating-area" 
                    placeholder="Leave a comment here" 
                    id="floatingOther"
                    onChange={setOtherServiceValue}
                    value={otherService || ""}
                >    
                </textarea>
                <label htmlFor="floatingOther">{lang.service_textarea_placehoder || uploadLang.service_textarea_placehoder}</label>
            </div>}
        </div>
    )
}