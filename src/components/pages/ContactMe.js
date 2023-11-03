import { faBookOpen, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Lang } from "../../context/LangContext";

export default function ContactMe(){
    const {lang, getLang, uploadLang} = useContext(Lang);
    return(
        <div className="pt-4 pb-3" id="contact">
            <div className="text-center header-section position-relative">
                <h3 className="pb-3">{lang.contact || uploadLang.contact}</h3>
            </div>
            <div className="row justify-content-center bg-white shadow p-5">
                <div className="col-md-10">
                    <form>    
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="full_name" className="form-label">{lang.fullName || uploadLang.fullName}</label>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon 
                                        icon={faUser} 
                                        className={getLang === "ar" ? "position-absolute pe-3 fs-5" : "position-absolute ps-3 fs-5"}
                                    />
                                    <input 
                                        type="text" 
                                        className={getLang === "ar" ? "form-control pe-5" : "form-control ps-5"} 
                                        id="full_name" 
                                        placeholder={lang.fullName_placeholder || uploadLang.fullName_placeholder}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">
                                    {lang.service_contact_email || uploadLang.service_contact_email}
                                </label>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon 
                                        icon={faEnvelope} 
                                        className={getLang === "ar" ? "position-absolute pe-3 fs-5" : "position-absolute ps-3 fs-5"}
                                    />
                                    <input 
                                        type="email" 
                                        className={getLang === "ar" ? "form-control pe-5" : "form-control ps-5"} 
                                        placeholder={lang.service_contact_email_placeholder || uploadLang.service_contact_email_placeholder}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="subject" className="form-label">{lang.subject || uploadLang.subject}</label>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon 
                                        icon={faBookOpen} 
                                        className={getLang === "ar" ? "position-absolute pe-3 fs-5" : "position-absolute ps-3 fs-5"}
                                    />
                                    <input 
                                        type="text" 
                                        className={getLang === "ar" ? "form-control pe-5" : "form-control ps-5"} 
                                        id="subject" 
                                        placeholder={lang.subject || uploadLang.subject}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="message" className="form-label">{lang.message || uploadLang.message}</label>
                                <textarea className="form-control" id="message" rows="5"></textarea>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="document" className="form-label">
                                    {lang.file || uploadLang.file} ({lang.optionnal || uploadLang.optionnal})
                                </label>
                                <input className="form-control" type="file" id="document"/>
                                <div id="document_help" className="form-text">
                                    {lang.file_text || uploadLang.file_text}
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">{lang.send_message || uploadLang.send_message}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}