import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { ContextServices } from "../../../../context/ServiceContext";
import { Lang } from "../../../../context/LangContext";

export default function PagesPrice(){
    const {pageNumber, page_price, textKey, selectedServiceModal} = useContext(ContextServices);
    const {lang, uploadLang} = useContext(Lang);
    return(
        <div>
            {pageNumber > 0 && <>
                <div className="d-flex justify-content-between">
                    <div>
                        <strong>
                            <FontAwesomeIcon icon={faFileLines} /> {lang.page_add_numbers_title || uploadLang.page_add_numbers_title}: {pageNumber} (
                                {pageNumber > 1 ? (lang.pages || uploadLang.pages) : (lang.page || uploadLang.page)}) x {
                                    (textKey === "Mobile" || selectedServiceModal === "Mobile") ? page_price + 80 : page_price} {lang.dollar || uploadLang.dollar
                                }
                        </strong>
                    </div>
                    <div>
                        <strong>
                            {(textKey === "Mobile" ? page_price + 80 : page_price) * pageNumber} {lang.dollar || uploadLang.dollar}
                        </strong>
                    </div>
                </div>
                <hr />
            </>}
        </div>
    )
}