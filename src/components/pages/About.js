import React from "react";
import { useContext } from "react";
import { Lang } from "../../context/LangContext";

export default function About(){
    const {lang, uploadLang} = useContext(Lang);
    return(
        <div className="pt-4 pb-3" id="about">
            <div className="text-center header-section position-relative">
                <h3 className="pb-3">{lang.about_header || uploadLang.about_header} Aymane Chnaif web-dev</h3>
            </div>
            <div className="bg-white mt-4 p-3">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 text-center mt-3">
                        <img src="/images/my_image.png" alt="Aimane" className="img-fluid" style={{ width : "400px" }} />
                    </div>
                    <div className="col-md-6 mt-3">
                        <p className="text-center fs-5">
                            <strong>
                                {lang.about_text || uploadLang.about_text} <br/>
                                {lang.about_text2 || uploadLang.about_text2}
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}