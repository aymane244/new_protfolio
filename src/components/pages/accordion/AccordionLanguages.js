import React from "react";
import { faCheckDouble, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function AccordionLanguages({getLang, lang, uploadLang}){
    const [showSkill1, setShowSkill1] = useState(false);
    const [showSkill2, setShowSkill2] = useState(false);
    const [showSkill3, setShowSkill3] = useState(false);
    return(
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={()=>setShowSkill1(!showSkill1)}>
                    <button className={getLang === "ar" ? "accordion-button accordion-button-ar" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="true" aria-controls="panelsStaySix-collapseSix">
                        <div className={getLang === "ar" ? "d-flex justify-content-between w-100" : ""}>
                            <div>
                                <FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    className={getLang === "ar" ? "font-icon-color ms-2" : "font-icon-color me-2"}
                                />
                                <strong>{lang.forntEnd || uploadLang.forntEnd}</strong>
                            </div>
                            <div>
                                {getLang === "ar" && (showSkill1 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />)}
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse show">
                    <div className="accordion-body text-start text-justify">
                        <ul>
                            <li><strong>HTML, CSS, Bootstrap</strong></li>
                            <li><strong>JavaScript, Jquery, Ajax</strong></li>
                            <li><strong>ReactJs, React Native</strong></li>
                            <li><strong>PhotoShop</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={()=>setShowSkill2(!showSkill2)}>
                    <button 
                        className={getLang === "ar" ? "accordion-button accordion-button-ar collapsed" : "accordion-button collapsed"}
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseSeven" 
                        aria-expanded="false" 
                        aria-controls="panelsStayOpen-collapseSeven"
                    >
                        <div className={getLang === "ar" ? "d-flex justify-content-between w-100" : ""}>
                            <div>
                                <FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    className={getLang === "ar" ? "font-icon-color ms-2" : "font-icon-color me-2"}
                                />
                                <strong> {lang.backEnd || uploadLang.backEnd}</strong>
                            </div>
                            <div>
                                {getLang === "ar" && (!showSkill2 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />)}
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse">
                    <div className="accordion-body text-start text-justify">
                        <ul>
                            <li><strong>PHP, Laravel, JAVA, JEE</strong></li>
                            <li><strong>Wordpress (plugins)</strong></li>
                            <li><strong>SQL, MySQL</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={()=>setShowSkill3(!showSkill3)}>
                    <button 
                        className={getLang === "ar" ? "accordion-button accordion-button-ar collapsed" : "accordion-button collapsed"}
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseEight" 
                        aria-expanded="false" 
                        aria-controls="panelsStayOpen-collapseEight"
                    >
                        <div className={getLang === "ar" ? "d-flex justify-content-between w-100" : ""}>
                            <div>
                                <FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    className={getLang === "ar" ? "font-icon-color ms-2" : "font-icon-color me-2"}
                                />
                                <strong>{lang.languages || uploadLang.languages}</strong>
                            </div>
                            <div>
                                {getLang === "ar" && (!showSkill3 ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />)}
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse">
                    <div className="accordion-body text-start text-justify">
                        <ul>
                            <li><strong>{lang.languages_arab || uploadLang.languages_arab} ({lang.languages_native || uploadLang.languages_native})</strong></li>
                            <li><strong>{lang.languages_english || uploadLang.languages_english} ({lang.languages_level || uploadLang.languages_level})</strong></li>
                            <li><strong>{lang.languages_french || uploadLang.languages_french} ({lang.languages_level || uploadLang.languages_level})</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}