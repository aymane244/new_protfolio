import React, { useContext } from "react";
import { ContextServices } from "../../../../context/ServiceContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import PagesPrice from "./PagesPrice";
import FuncionalitiesPrice from "./FunctionalitiesPrice";

export default function EducationalPrice(){
    const {page_price, value, otherService, pageNumber, sum} = useContext(ContextServices);
    let initial_price = 3000;
    return(
        <div>
            <hr/>
            <div className="d-flex justify-content-between">
                <div>
                    <strong><FontAwesomeIcon icon={faMoneyCheckDollar} /> Initial Price: </strong><br/>
                    <span className="form-text" id="basic-addon4">
                        * The initial price include the home page, about us page, contact form, user login system,<br/>
                        payment implemantation, and admin page
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
            <hr/>
        </div>
    )
}