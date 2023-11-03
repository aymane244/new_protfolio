import React, { useContext } from "react";
import { ContextServices } from "../../../../context/ServiceContext";
import PagesPrice from "./PagesPrice";
import FuncionalitiesPrice from "./FunctionalitiesPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";

export default function EcommercePrice(){
    const {page_price, value, otherService, pageNumber, sum, ecommerceService} = useContext(ContextServices);
    let initial_price = ecommerceService === "creditCard_delivery" ? 1000 : 700
    return(
        <div className="mb-3">
            {ecommerceService && <><hr/>
            <div className="d-flex justify-content-between">
                <div>
                    <strong><FontAwesomeIcon icon={faMoneyCheckDollar} /> Initial Price: </strong><br/>
                    <span className="form-text" id="basic-addon4">
                        * The initial price include the home page, about us page, responsive design, contact form, <br/>
                        user login system, checkout page, and admin page
                    </span>
                </div>
                <p><strong>{initial_price} USD</strong></p>
            </div>
            <hr/>
            <PagesPrice/>
            {(value.responsive || value.newsLetter || value.SEO || value.multilingue || otherService) && <>
                <FuncionalitiesPrice/>
                <hr />
            </>}
            <div className="d-flex justify-content-between">
                <div>
                    <strong><FontAwesomeIcon icon={faMoneyCheckDollar} /> Total Price: </strong><br/>
                    <span className="form-text" id="basic-addon4">
                        * {otherService === "" ? "No taxes or other fees included" : "Other services will be included later"}
                    </span>
                </div>
                <div><strong>{initial_price + (page_price * pageNumber) + sum} USD</strong></div>
            </div>
            <hr/></>}
        </div>
    )
}