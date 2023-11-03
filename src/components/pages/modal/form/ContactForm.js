import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { Lang } from "../../../../context/LangContext";
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInputWithCountrySelect from "react-phone-number-input";

export default function ContactForm({contact, handleContactForm}){
    const {getLang, lang, uploadLang} = useContext(Lang);
    const [phone , setPhone] = useState("");
    const [valid , setValid] = useState(true);
    console.log(valid);
    function handlePhoneForm(value){
        setPhone(value);
        setValid(ValidePhoneNumber(value));
    }
    function ValidePhoneNumber(phoneNumber){
        const phonePattern = /^\d{12}$/;
        return phonePattern.test(phoneNumber);
    }
    return(
        <div className="row">
            <div className="col-md-6 mb-3">
                <label htmlFor="first_name" className="form-label">
                    {lang.service_contact_first_name || uploadLang.service_contact_first_name} ({lang.optionnal || uploadLang.optionnal})
                </label>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUser} className={getLang === "ar" ? "position-absolute pe-3 fs-5" : "position-absolute ps-3 fs-5"}/>
                    <input 
                        type="text" 
                        className={getLang === "ar" ? "form-control pe-5" : "form-control ps-5"}
                        id="first_name" 
                        name="first_name" 
                        placeholder={lang.service_contact_first_name_placeholder || uploadLang.service_contact_first_name_placeholder}
                        onChange={handleContactForm}
                        value={contact.first_name || ""}
                    />
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="last_name" className="form-label">
                    {lang.service_contact_last_name || uploadLang.service_contact_last_name} ({lang.optionnal || uploadLang.optionnal})
                </label>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUser} className={getLang === "ar" ? "position-absolute pe-3 fs-5" : "position-absolute ps-3 fs-5"}/>
                    <input 
                        type="text" 
                        className={getLang === "ar" ? "form-control pe-5" : "form-control ps-5"} 
                        id="last_name" 
                        name="last_name" 
                        placeholder={lang.service_contact_last_name_placeholder || uploadLang.service_contact_last_name_placeholder}
                        onChange={handleContactForm}
                        value={contact.last_name || ""}
                    />
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="phone_number" className="form-label">
                    {lang.service_contact_phone || uploadLang.service_contact_phone} ({lang.optionnal || uploadLang.optionnal})
                </label>
                    <PhoneInputWithCountrySelect
                        dir="ltr"
                        country={'us'}
                        id="phone_number" 
                        name="phone_number" 
                        placeholder="+ 123456789"
                        onChange={handlePhoneForm}
                        value={phone || ""}
                    />
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                    {lang.service_contact_email || uploadLang.service_contact_email} ({lang.not_optionnal || uploadLang.not_optionnal})
                </label>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faEnvelope} className={getLang === "ar" ? "position-absolute pe-3 fs-5" : "position-absolute ps-3 fs-5"}/>
                    <input 
                        type="email" 
                        className={getLang === "ar" ? "form-control pe-5" : "form-control ps-5"}
                        id="email" 
                        name="email" 
                        placeholder={lang.service_contact_email_placeholder || uploadLang.service_contact_email_placeholder}
                        onChange={handleContactForm}
                        value={contact.email || ""}
                    />
                </div>
            </div>
        </div>
    )
}