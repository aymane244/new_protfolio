import { faBookOpen, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Lang } from "../../context/LangContext";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import Swal from "sweetalert2";

export default function ContactMe(){
    const {lang, getLang, uploadLang} = useContext(Lang);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const fileInputRef = useRef(null);
    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState({
        fullName : "",
        email : "",
        subject : "",
        message : "",
        document : "",
        error: [],
    })
    function handleMessage(event){
        const{name, files, value, type} = event.target;
        setMessage(formData => ({
            ...formData,
            [name]: type === "file" ? files[0] : value
        }))
    }
    function submitMessage(event){
        event.preventDefault();
        const data = new FormData();
        data.append("fullName", message.fullName);
        data.append("email", message.email);
        data.append("subject", message.subject);
        data.append("message", message.message);
        data.append("document", message.document);
        data.append("language", lang);
        setLoader(true);
        axios.post("https://aimane-web-dev.com/api/send_message", data)
        .then(response=>{
            if(response.data.status === 400){
                setMessage(errors =>({
                    ...errors,
                    error: response.data.message_errors,
                }))
                setLoader(false);
            }else if(response.data.status === 200){
                Swal.fire({
                    text: response.data.message,
                    icon: 'success',
                }).then(() => {
                    setMessage({
                        fullName: "",
                        email: "",
                        subject: "",
                        message: "",
                        document: "",
                        error: [],
                    });
                    fileInputRef.current.value = '';
                    setLoader(false);
                });
            }
        }).catch(error=>{
            Swal.fire({
                text: lang.error || uploadLang.error, error,
                icon: 'error',
            });
            setLoader(false);
        });
    }
    useEffect(()=>{
        if(inView){
            const elements = document.querySelectorAll('.slide-in_contact');
            elements.forEach((element)=>{
                element.classList.add('slide-in-visible');
            });
        }
    }, [inView]);
    return(
        <div ref={ref} className="py-5 slide-in_contact" id="contact">
            <div className="text-center header-section position-relative">
                <h3 className="pb-2">{lang.contact || uploadLang.contact}</h3>
            </div>
            <div className="row justify-content-center bg-white shadow p-5 mt-3">
                <div className="col-md-10">
                    <form onSubmit={submitMessage} encType="multipart/form-data">    
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
                                        name="fullName"
                                        className={getLang === "ar" ? "form-control pe-5" : "form-control ps-5"} 
                                        id="fullName" 
                                        placeholder={lang.fullName_placeholder || uploadLang.fullName_placeholder}
                                        onChange={handleMessage}
                                        value={message.fullName}
                                    />
                                </div>
                                <div className="text-danger">{message.error.fullName}</div>
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
                                        name="email"
                                        id="email"
                                        className={getLang === "ar" ? "form-control pe-5" : "form-control ps-5"} 
                                        placeholder={lang.service_contact_email_placeholder || uploadLang.service_contact_email_placeholder}
                                        onChange={handleMessage}
                                        value={message.email}
                                    />
                                </div>
                                <div className="text-danger">{message.error.email}</div>
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
                                        name="subject"
                                        className={getLang === "ar" ? "form-control pe-5" : "form-control ps-5"} 
                                        id="subject" 
                                        placeholder={lang.subject || uploadLang.subject}
                                        onChange={handleMessage}
                                        value={message.subject}
                                    />
                                </div>
                                <div className="text-danger">{message.error.subject}</div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="message" className="form-label">{lang.message || uploadLang.message}</label>
                                <textarea 
                                    className="form-control" 
                                    id="message" 
                                    rows="5" 
                                    name="message" 
                                    onChange={handleMessage}
                                    value={message.message}
                                >
                                </textarea>
                                <div className="text-danger">{message.error.message}</div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="document" className="form-label">
                                    {lang.file || uploadLang.file} ({lang.optionnal || uploadLang.optionnal})
                                </label>
                                <input 
                                    className="form-control" 
                                    type="file" id="document" 
                                    name="document" 
                                    ref={fileInputRef} 
                                    onChange={handleMessage}
                                />
                                <div id="document_help" className="form-text">
                                    {lang.file_text || uploadLang.file_text}
                                </div>
                                <div className="text-danger">{message.error.document}</div>
                            </div>
                            <div className="text-center">
                                {loader ? 
                                    <button type="submit" className="btn btn-primary" disabled>
                                        <span className="spinner-border spinner-border-sm me-2"></span>
                                        {lang.send_message || uploadLang.send_message}
                                    </button> : 
                                    <button type="submit" className="btn btn-primary">{lang.send_message || uploadLang.send_message}</button>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}