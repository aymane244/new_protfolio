import React, { useContext, useState } from "react";
import { serviceDescription } from "../../data/ServiceDescription";
import { Lang } from "../../../context/LangContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ServiceFrom from "./form/ServiceForm";
import ContactForm from "./form/ContactForm";
import { ContextServices } from "../../../context/ServiceContext";
import AllServicesForm from "./form/AllServicesForm";
import AllServicesPrice from "./prices/AllServicesPrice";
import axios from "axios";
import Swal from "sweetalert2";

export default function ServiceModal(){
    const {getLang, lang, uploadLang} = useContext(Lang);
    const {textKey, setTextKey, ecommerceService, selectedServiceModal, setSelectedServiceModal, contact, setContact, nextForm, setNextForm, 
        phone, setPhone, pageNumber, value, page_price, sum, services, otherService, languages} = useContext(ContextServices);
    const [service, setService] = useState("");
    const [restServices, setRestServices] = useState("");
    const [loader, setLoader] = useState(false);
    function selectService(event){
        const selectedService = serviceDescription.find(
            (service) => service.key === event.target.value
        );
        if(selectedService){
            setTextKey(selectedService.key);
            setService(getLang === "en" ? selectedService.service_english : getLang === "fr" ? selectedService.service_french : getLang === "ar" ? selectedService.service_arabic : selectedService.service_english);
        }else{
            setTextKey("");
            setService("");
        }
    }
    function loadService(){
        const selectedService = serviceDescription.find(
            (service) => service.key === selectedServiceModal
        );
        if(selectedServiceModal !== ""){
            setSelectedServiceModal(selectedServiceModal);
            setService(getLang === "en" ? selectedService.service_english : getLang === "fr" ? selectedService.service_french : getLang === "ar" ? selectedService.service_arabic : selectedService.service_english);
        }else{
            setService("");
            setSelectedServiceModal("");
        }
    }
    function changeForm(){
        setNextForm(!nextForm);
    }
    function handleTextArea(event){
        if(event.key === "Enter"){
            document.createRange('\n');
        }
        setRestServices(event.target.value);
    }
    function handleContactForm(event){
        setContact(formData=>({
            ...formData,
            [event.target.name] : event.target.value
        }))
    }
    function handlePhoneForm(value){
        setPhone(value);
    }
    const priceCalculation = ()=>{
        switch (textKey || selectedServiceModal){
            case "Landing":
                return 150;
            case "Portfolio/Business" :
                return 170;
            case "Blog" :
                return 500;
            case "Ecommerce" :
                return (ecommerceService === "creditCard_delivery" ? 1000 : 700);
            case "Educational" :
                return 3000;
            case "Application" :
                return 5000;
            case "Mobile" :
                return 600;
            default:
                return 0;
        }
    }
    let initial_price = priceCalculation();
    function sendQuote(event){
        event.preventDefault();
        const check_languages = value.multilingue === "Multilingual website" && languages.some(item => item.languageSelect === '');
        if(check_languages.length > 0){
            Swal.fire({
                text: lang.error_language || uploadLang.error_language,
                icon: 'warning',
            });
        }else{
            const data = new FormData();
            data.append("service", service || selectedServiceModal);
            data.append("first_name", contact.first_name);
            data.append("last_name", contact.last_name);
            data.append("email", contact.email);
            data.append("phone", phone);
            data.append("initial_price", initial_price);
            data.append("page_number", pageNumber);
            data.append("page_price", page_price);
            data.append("services", JSON.stringify(services));
            data.append("other_service", otherService);
            data.append("sum", sum);
            data.append("language", lang);
            data.append("rest_services", restServices);
            data.append("languages", JSON.stringify(languages));
            setLoader(true);
            axios.post("https://aimane-web-dev.com/api/view_quote", data)
            .then(response=>{
                return axios.post("https://aimane-web-dev.com/api/send_quote", data);
            })
            .then(response=>{
                Swal.fire({
                    text: response.data.message,
                    icon: 'success',
                }).then(() => {
                    window.location.reload();
                    setLoader(false);
                });
            })
            .catch(error=>{
                Swal.fire({
                    text: lang.error || uploadLang.error, error,
                    icon: 'error',
                });
                setLoader(false);
            });
        }
    }
    return(
        <div className="modal fade" id="service" tabIndex="-1" aria-labelledby="serviceLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="serviceLabel">{uploadLang.service_title || lang.service_title}</h1>
                        <div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="modal-body">
                        {((textKey !== "" && textKey !== "Plugin" && textKey !== "Maintenance") || 
                            (selectedServiceModal !== "" && selectedServiceModal !== "Plugin" && selectedServiceModal !== "Maintenance")) 
                            && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(contact.email) && 
                        <div className="row justify-content-center my-2">
                            <div className="col-md-10">
                                <span 
                                    className={!nextForm ? "float-end pointer fs-4" : "pointer fs-4"}
                                    onClick={changeForm}
                                >{nextForm && <FontAwesomeIcon icon={faArrowLeft} className="float-start" />} 
                                {!nextForm && <FontAwesomeIcon icon={faArrowRight} />}
                                </span>
                            </div>
                        </div>}
                        <form onSubmit={sendQuote}>
                            <div className="row justify-content-center">
                                <div className="col-md-10">
                                    {!nextForm && 
                                        <ServiceFrom
                                            selectService = {selectService}
                                            serviceDescription = {serviceDescription}
                                            setRestServices = {setRestServices}
                                            loadService = {loadService}
                                        />
                                    }
                                    {((textKey === "Plugin" || textKey === "Maintenance" || selectedServiceModal === "Plugin" || selectedServiceModal === "Maintenance")
                                    ) && 
                                        <div>
                                            <h5 className="text-center my-2">
                                                {lang.service_plugin_maintenance || uploadLang.service_plugin_maintenance}
                                            </h5>
                                            <div className={getLang === "ar" ? "form-floating form-floating-ar my-3" : "form-floating my-3"}>
                                                <textarea 
                                                    className="form-control floating-area" 
                                                    placeholder="Leave a comment here" 
                                                    id="floatingRestServices"
                                                    onChange={handleTextArea}
                                                    value={restServices || ""}
                                                >    
                                                </textarea>
                                                <label htmlFor="floatingRestServices">
                                                    {lang.service_textarea_placehoder || uploadLang.service_textarea_placehoder}
                                                </label>
                                            </div>
                                        </div>
                                    }
                                    {!nextForm && 
                                        <ContactForm
                                            handleContactForm = {handleContactForm}
                                            handlePhoneForm = {handlePhoneForm}
                                            contact = {contact}
                                            phone = {phone}
                                        />
                                    }
                                    {((textKey !== "" || selectedServiceModal !== "") && nextForm) && 
                                        <>
                                            <AllServicesForm
                                                service={service} 
                                            />
                                            <AllServicesPrice 
                                                value = {value}
                                                pageNumber ={pageNumber}
                                                page_price = {page_price}
                                                sum = {sum}
                                                ecommerceService = {ecommerceService}
                                                textKey = {textKey}
                                                selectedServiceModal = {selectedServiceModal}
                                                initial_price = {initial_price}
                                            />
                                        </>
                                    }
                                </div>
                                {((nextForm && ((textKey !== "Ecommerce" && selectedServiceModal !== "Ecommerce") ||
                                    (ecommerceService !== "" && (textKey === "Ecommerce" || selectedServiceModal === "Ecommerce")))) || 
                                    (textKey === "Plugin" || textKey === "Maintenance" || selectedServiceModal === "Plugin" || 
                                    selectedServiceModal === "Maintenance")) && 
                                    <div className="col-md-10 text-center">
                                        {/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(contact.email)  && loader !== true ?
                                            <button className="btn btn-primary px-5 py-2">
                                                {lang.send || uploadLang.send}
                                            </button> : 
                                            loader === true ? 
                                            <button className="btn btn-primary px-5 py-2" disabled>
                                                <span className="spinner-border spinner-border-sm me-2"></span>
                                                {lang.send || uploadLang.send}
                                            </button> :
                                            <button className="btn btn-primary px-5 py-2" disabled>
                                                {lang.send || uploadLang.send}
                                            </button>
                                        }
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        {!nextForm && <p className="text-secondary">{lang.next_text || uploadLang.next_text}</p>}
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            {lang.close || uploadLang.close}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}