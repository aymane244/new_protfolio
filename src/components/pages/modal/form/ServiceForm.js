import React, { useContext } from "react";
import { ContextServices } from "../../../../context/ServiceContext";
import { Lang } from "../../../../context/LangContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList } from "@fortawesome/free-solid-svg-icons";

export default function ServiceFrom({ selectService, serviceDescription, setRestServices, loadService}){
    const {resetValues, resetPageNumbers, setOtherService, textKey, selectedServiceModal} = useContext(ContextServices);
    const {getLang, lang, uploadLang} = useContext(Lang);
    function handleSelectChange(event){
        selectService(event);
        resetValues(event);
        resetPageNumbers();
        setOtherService("");
        setRestServices("");
    }
    function handleLodedService(event){
        loadService();
        resetValues(event);
        resetPageNumbers();
        setOtherService("");
        setRestServices("");
    }
    const selectedService = serviceDescription.find(
        (service) => service.key === selectedServiceModal
    );
    return(
        <div className="my-3">
            <div className="d-flex align-items-center">
                <FontAwesomeIcon 
                    icon={faTableList} 
                    className={getLang === "ar" ? "position-absolute me-3 fs-5" : "position-absolute ms-3 fs-5"}
                />
                {selectedServiceModal === "" && <select 
                    className={getLang === "ar" ? "form-select form-select-ar pe-5" : "form-select ps-5"} 
                    id="service-select" 
                    onChange={handleSelectChange} 
                    defaultValue={textKey}
                >
                    <option value="" key="0">-- {lang.service_select || uploadLang.service_select} --</option>
                    {serviceDescription.map((service, index)=>(
                        <option value={service.key} key={index}>
                            {getLang === "en" ? service.service_english : getLang === "fr" ? service.service_french : service.service_arabic}
                        </option>
                    ))}
                </select>}
                {selectedServiceModal !== "" && <select 
                    className={getLang === "ar" ? "form-select form-select-ar pe-5" : "form-select ps-5"} 
                    id="service-select" 
                    onChange={handleLodedService} 
                    value={selectedServiceModal}
                >
                    {
                        <option value={selectedService.key} key={selectedService.key}>
                            {getLang === "en" ? selectedService.service_english : getLang === "fr" ? selectedService.service_french : 
                            selectedService.service_arabic}
                        </option>
                    } 
                </select>}
            </div>
            {(textKey !== "" && textKey !== "Plugin" && textKey !== "Maintenance") && <div className="form-text" id="basic-addon4">
                * {lang.service_select_text || uploadLang.service_select_text}
            </div>}
        </div>
    )
}