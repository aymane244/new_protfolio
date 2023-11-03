import React, { useContext } from "react";
import PagesAdded from "./PagesAdded";
import Functionalities from "./Funcionalities";
import { ContextServices } from "../../../../context/ServiceContext";
import { Lang } from "../../../../context/LangContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function AllServicesForm({service}){
    const {textKey, selectEcommerceService, ecommerceService, selectedServiceModal} = useContext(ContextServices);
    const {getLang, lang, uploadLang} = useContext(Lang);
    return(
        <div>
            <h4 className="mt-3 text-center">
                {lang.service_title || uploadLang.service_title} : {(textKey || selectedServiceModal) && service}
            </h4>
            {(textKey === "Ecommerce" || selectedServiceModal === "Ecommerce") && <div className="row">
                <div className="col-md-12 mt-3">
                    <div className="d-flex justify-content-between">
                        <label htmlFor="ecommerce_service" className="form-label me-3 mt-lg-1">
                            {lang.ecommerce_service || uploadLang.ecommerce_service}: 
                        </label>
                        <div className="d-flex align-items-center w-75">
                            <FontAwesomeIcon 
                                icon={faCartShopping} 
                                className={getLang === "ar" ? "position-absolute me-3 fs-5" : "position-absolute ms-3 fs-5"}
                            />
                            <select 
                                className={getLang === "ar" ? "form-select form-select-ar pe-5" : "form-select ps-5"}
                                id="service-select" 
                                onChange={selectEcommerceService} 
                                value={ecommerceService}
                            >
                                <option value="">-- {lang.ecommerce_select || uploadLang.ecommerce_select} --</option>
                                <option value="delivery">{lang.ecommerce_delivery || uploadLang.ecommerce_delivery}</option>
                                <option value="creditCard_delivery">
                                    {lang.ecommerce_delivery_crediCard || uploadLang.ecommerce_delivery_crediCard}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>}
            {((ecommerceService && (textKey === "Ecommerce" || selectedServiceModal === "Ecommerce")) || 
                ((textKey !== "Landing" && textKey !== "Ecommerce") && (selectedServiceModal !== "Landing" && selectedServiceModal !== "Ecommerce"))) && <div className="row">
                <PagesAdded/>
            </div>}
            {((ecommerceService && (textKey === "Ecommerce" || selectedServiceModal === "Ecommerce")) || 
                (textKey !== "Mobile" && textKey !== "Ecommerce" && selectedServiceModal !== "Mobile" && selectedServiceModal !== "Ecommerce")) && 
                <div className="row">
                <Functionalities/>
            </div>}
        </div>
    )
}