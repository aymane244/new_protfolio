import React, { useContext } from "react";
import { ContextServices } from "../../../../context/ServiceContext";
import { Lang } from "../../../../context/LangContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";

export default function PagesAdded(){
    const {addPage, pageNumber} = useContext(ContextServices);
    const {getLang, lang, uploadLang} = useContext(Lang);
    return(
        <div className="col-md-12 mb-2 mt-3">
            <div className="row align-items-center">
                <div className="col-md-3">
                    <label htmlFor="page_numbers" className="form-label">{lang.page_add_title || uploadLang.page_add_title}: </label>
                </div>
                <div className="col-md-9">
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon 
                            icon={faListOl} 
                            className={getLang === "ar" ? "position-absolute me-3 fs-5" : "position-absolute ms-3 fs-5"}
                        />
                        <input 
                            type="number" 
                            className={getLang === "ar" ? "form-control pe-5" : "form-control ps-5"}
                            id="page_numbers" 
                            name="page_numbers"
                            min="0"
                            onChange={addPage}
                            value={pageNumber}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}