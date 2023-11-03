import { createContext, useState } from "react";
import Navbar from "../components/Layout/Navbar";
import { english } from "../assets/lang/English";
import { french } from "../assets/lang/French";
import { arabic } from "../assets/lang/Arabic";

export const Lang = createContext();
export default function LangContext(){
    const getLang = localStorage.getItem('lang');
    const [lang, setLang] = useState(getLang || "en");
    const [loading, setLoading] = useState(false);
    const uploadLang = getLang === "en" || lang === "en" ? english : getLang === "fr" || lang === "fr" ? french : arabic
    function changeLang(event){
        setLoading(true);
        setLang(event.target.id === "en" ? english : event.target.id === "fr" ? french : arabic);
        localStorage.setItem("lang", event.target.id);
        setTimeout(()=>{
            setLoading(false);
            window.location.reload();
        }, 1150);
    }
    return(
        <Lang.Provider value={{ lang, uploadLang, changeLang, getLang }}>
            {loading ? 
                <div className="text-center d-flex justify-content-center align-items-center centered" dir={getLang === "ar" ? "rtl" : ""}>
                    <h5 className="d-flex align-items-center">
                        <span className={getLang === "ar" ? "spinner-border ms-2" : "spinner-border me-2"}></span> 
                        <span>{lang.loading || uploadLang.loading}...</span>
                    </h5>
                </div> 
                : <Navbar/>
            }
        </Lang.Provider>
    )
}