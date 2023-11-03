import React, { useContext } from "react";
import { ContextServices } from "../../../../context/ServiceContext";
import PagesPrice from "./PagesPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";

export default function MobilePrice(){
    const {page_price, pageNumber, sum, textKey} = useContext(ContextServices);
    let initial_price = 600;
    let final_page_price = textKey === "Mobile" ? page_price + 80 : page_price;
    return(
        <div>
            <hr/>
            <div className="d-flex justify-content-between">
                <div>
                    <strong><FontAwesomeIcon icon={faMoneyCheckDollar} /> Initial Price: </strong><br/>
                </div>
                <p><strong>{initial_price} USD</strong></p>
            </div>
            <hr/>
            <PagesPrice/>
            <div className="d-flex justify-content-between">
                <div>
                    <strong><FontAwesomeIcon icon={faMoneyCheckDollar} /> Total Price: </strong><br/>
                    <span className="form-text" id="basic-addon4">
                        *No taxes or other fees included
                    </span>
                </div>
                <div><strong>{initial_price + (final_page_price * pageNumber) + sum} USD</strong></div>
            </div>
            <hr/>
        </div>
    )
}