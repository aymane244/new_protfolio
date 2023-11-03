import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { ContextServices } from "../../../../context/ServiceContext";
import FuncionalitiesPrice from "./FunctionalitiesPrice";

export default function LandingPrice(){
    const {value, otherService, sum} = useContext(ContextServices);
    let initialPrice = 150;
    return(
        <div>
            <hr/>
            <div className="d-flex justify-content-between">
                <div>
                    <strong><FontAwesomeIcon icon={faMoneyCheckDollar} /> Initial Price :</strong>
                </div>
                <div><strong>{initialPrice} USD</strong></div>
            </div>
            {(value.responsive || value.newsLetter || value.SEO || value.admin || value.multilingue || otherService) && <>
                <hr />
                <FuncionalitiesPrice/>
            </>}
            <hr/>
            <div className="d-flex justify-content-between">
                <div>
                    <strong><FontAwesomeIcon icon={faMoneyCheckDollar} /> Total Price: </strong><br/>
                    <span className="form-text" id="basic-addon4">
                        * {otherService === "" ? "No taxes or other fees included" : "Other services will be included later"}
                    </span>
                </div>
                <div><strong>{initialPrice + sum} USD</strong></div>
            </div>
            <hr/>
        </div>
    )
}