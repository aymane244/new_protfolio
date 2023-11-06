import React, { useContext } from "react";
import { ContextServices } from "../../../../context/ServiceContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import FuncionalitiesPrice from "./FunctionalitiesPrice";
import PagesPrice from "./PagesPrice";
import { Lang } from "../../../../context/LangContext";

export default function AllServicesPrice(){
    const {value, otherService, pageNumber, page_price, sum, textKey, ecommerceService, selectedServiceModal} = useContext(ContextServices);
    const {lang, uploadLang} = useContext(Lang)
    let final_page_price = (textKey === "Mobile" || selectedServiceModal === "Mobile") ? page_price + 80 : page_price;
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
    return(
        <div>
            {(((textKey === "Ecommerce" || selectedServiceModal === "Ecommerce") && ecommerceService) 
            || (textKey !== "Ecommerce" && selectedServiceModal !== "Ecommerce")) && <><hr />
                <div className="d-flex justify-content-between">
                    <div>
                        <strong><FontAwesomeIcon icon={faMoneyCheckDollar} /> {lang.initial_price || uploadLang.initial_price}: </strong><br />
                        {((textKey === "Portfolio/Business" || textKey === "Application") || 
                            (selectedServiceModal === "Portfolio/Business" || selectedServiceModal === "Application")) && 
                            <span className="form-text pe-5 d-flex" id="basic-addon4">
                                <span className="pe-2">*</span> 
                                <span>
                                    {lang.initial_price_text || uploadLang.initial_price_text} <br/>
                                    {(textKey === "Application" || selectedServiceModal === "Application") ? 
                                        (lang.initial_price_text_application || uploadLang.initial_price_text_application) : ""
                                    }
                                </span> 
                            </span>
                        }
                        {(textKey === "Blog" || selectedServiceModal === "Blog") && <span className="form-text" id="basic-addon4">
                            * {lang.initial_price_text_blog1 || uploadLang.initial_price_text_blog1} <br/>
                            {lang.initial_price_text_blog2 || uploadLang.initial_price_text_blog2}
                        </span>}
                        {(textKey === "Ecommerce" || selectedServiceModal === "Ecommerce") && <span className="form-text" id="basic-addon4">
                            * {lang.initial_price_text_ecommerce1 || uploadLang.initial_price_text_ecommerce1} <br/>
                            {lang.initial_price_text_ecommerce2 || uploadLang.initial_price_text_ecommerce2}
                        </span>}
                        {(textKey === "Educational"  || selectedServiceModal === "Educational") && <span className="form-text" id="basic-addon4">
                            * {lang.initial_price_text_educational1 || uploadLang.initial_price_text_educational1}<br/>
                            {lang.initial_price_text_educational2 || uploadLang.initial_price_text_educational2}
                        </span>}
                    </div>
                    <div>
                        <strong>{initial_price} {lang.dollar || uploadLang.dollar}</strong>
                    </div>
                </div>
                <hr />
                <PagesPrice/>
                {(value.responsive || value.newsLetter || value.SEO || value.admin || value.multilingue || otherService) && <>
                    <FuncionalitiesPrice/>
                    <hr />
                </>}
                <div className="d-flex justify-content-between">
                    <div>
                        <strong><FontAwesomeIcon icon={faMoneyCheckDollar} /> {lang.total_price || uploadLang.total_price}: </strong><br />
                        <span className="form-text" id="basic-addon4">
                            * {otherService === "" ? (lang.total_price_text || uploadLang.total_price_text) : 
                                (lang.total_price_other || uploadLang.total_price_other)
                            }
                        </span>
                    </div>
                    <div>
                        <strong>
                            {initial_price + (textKey !== "Landing" && (final_page_price * pageNumber)) + sum} {lang.dollar || uploadLang.dollar}
                        </strong>
                    </div>
                </div>
                <hr />
            </>}
        </div>
    )
}