import React from "react";
import { faCheckDouble, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Accordion({getLang, lang, uploadLang}){
    const [showSkill1, setShowSkill1] = useState(false);
    const [showSkill2, setShowSkill2] = useState(false);
    const [showSkill3, setShowSkill3] = useState(false);
    const [showSkill4, setShowSkill4] = useState(false);
    const [showSkill5, setShowSkill5] = useState(false);
    return(
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={()=>setShowSkill1(!showSkill1)}>
                    <button 
                        className={getLang === "ar" ? "accordion-button accordion-button-ar collapsed" : "accordion-button collapsed"} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseOne" 
                        aria-expanded="false" 
                        aria-controls="panelsStayOpen-collapseOne"
                    >
                        <div className={getLang === "ar" ? "d-flex justify-content-between w-100" : ""}>
                            <div className="d-flex">
                                <span>
                                    <FontAwesomeIcon 
                                        icon={faCheckDouble} 
                                        className={getLang === "ar" ? "font-icon-color margin_backend_ar" : "font-icon-color me-2"}
                                    />
                                </span>
                                <span><strong> {lang.skill_fullStack || uploadLang.skill_fullStack}</strong></span>
                            </div>
                            <div>
                                {getLang === "ar" && (showSkill1 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />)}
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                    <div className="accordion-body text-start text-justify">
                        <strong>
                            {lang.skill_fullStack_text1 || uploadLang.skill_fullStack_text1}<br/>
                            {lang.skill_fullStack_text2 || uploadLang.skill_fullStack_text2}
                        </strong>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={()=>setShowSkill2(!showSkill2)}>
                    <button 
                        className={getLang === "ar" ? "accordion-button accordion-button-ar collapsed" : "accordion-button collapsed"}
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseTwo" 
                        aria-expanded="false" 
                        aria-controls="panelsStayOpen-collapseTwo"
                    >
                        <div className={getLang === "ar" ? "d-flex justify-content-between w-100" : ""}>
                            <div className="d-flex">
                                <span>
                                    <FontAwesomeIcon 
                                        icon={faCheckDouble} 
                                        className={getLang === "ar" ? "font-icon-color ms-2" : "font-icon-color me-2"}
                                    />
                                </span>
                                <span><strong>{lang.skill_mobile || uploadLang.skill_mobile}</strong></span>
                            </div>
                            <div>
                                {getLang === "ar" && (!showSkill2 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />)}
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body text-start text-justify">
                        <strong>{lang.skill_mobile_text || uploadLang.skill_mobile_text}</strong> 
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={()=>setShowSkill3(!showSkill3)}>
                    <button 
                        className={getLang === "ar" ? "accordion-button accordion-button-ar collapsed" : "accordion-button collapsed"}
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseThree" 
                        aria-expanded="false" 
                        aria-controls="panelsStayOpen-collapseThree"
                    >
                        <div className={getLang === "ar" ? "d-flex justify-content-between w-100" : ""}>
                            <div>
                                <FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    className={getLang === "ar" ? "font-icon-color ms-2" : "font-icon-color me-2"}
                                />
                                <strong> {lang.skill_responsive || uploadLang.skill_responsive}</strong>
                            </div>
                            <div>
                                {getLang === "ar" && (!showSkill3 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />)}
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body text-start text-justify">
                        <strong>{lang.skill_responsive_text || uploadLang.skill_responsive_text}</strong> 
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={()=>setShowSkill4(!showSkill4)}>
                    <button 
                        className={getLang === "ar" ? "accordion-button accordion-button-ar collapsed" : "accordion-button collapsed"} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseFour" 
                        aria-expanded="false" 
                        aria-controls="panelsStayOpen-collapseFour"
                    >
                        <div className={getLang === "ar" ? "d-flex justify-content-between w-100" : ""}>
                            <div>
                                <FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    className={getLang === "ar" ? "font-icon-color margin_backend_ar" : "font-icon-color me-2"}
                                />
                                <strong> {lang.skill_backEnd || uploadLang.skill_backEnd}</strong>
                            </div>
                            <div>
                                {getLang === "ar" && (!showSkill4 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />)}
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                    <div className="accordion-body text-start text-justify">
                        <strong>{lang.skill_backEnd_text || uploadLang.skill_backEnd_text}</strong> 
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={()=>setShowSkill5(!showSkill5)}>
                    <button 
                        className={getLang === "ar" ? "accordion-button accordion-button-ar collapsed" : "accordion-button collapsed"}
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseFive" 
                        aria-expanded="false" 
                        aria-controls="panelsStayOpen-collapseFive"
                    >
                        <div className={getLang === "ar" ? "d-flex justify-content-between w-100" : ""}>
                            <div>
                                <FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    className={getLang === "ar" ? "font-icon-color ms-2" : "font-icon-color me-2"}
                                />
                                <strong> {lang.skill_ProblemSolving || uploadLang.skill_ProblemSolving}</strong>
                            </div>
                            <div>
                                {getLang === "ar" && (!showSkill5 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />)}
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                    <div className="accordion-body text-start text-justify">
                        <strong>{lang.skill_ProblemSolving_text || uploadLang.skill_ProblemSolving_text}</strong> 
                    </div>
                </div>
            </div>
        </div>
    )
}