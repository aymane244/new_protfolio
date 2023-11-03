import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { ContextServices } from "../../../../context/ServiceContext";
import FuncionalitiesPrice from "./FunctionalitiesPrice";
import PagesPrice from "./PagesPrice";

export default function PortfolioPrice(){
    const {value, otherService, pageNumber, page_price, sum} = useContext(ContextServices);
    let initial_price = 170;
    return(
        <div>
            <hr/>
            <div className="d-flex justify-content-between">
                <div>
                    <strong><FontAwesomeIcon icon={faMoneyCheckDollar} /> Initial Price: </strong><br/>
                    <span className="form-text" id="basic-addon4">
                        * The initial price include the home page, about us page and the contact form
                    </span>
                </div>
                <p><strong>{initial_price} USD</strong></p>
            </div>
            <hr/>
            <PagesPrice/>
            {(value.responsive || value.newsLetter || value.SEO || value.admin || value.multilingue || otherService) && <>
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