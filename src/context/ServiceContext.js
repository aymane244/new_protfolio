import React, { createContext, useState } from "react";
import Home from "../components/Home";

export const ContextServices = createContext();
export default function ServiceContext(){
    const [otherService, setOtherService] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const [textKey, setTextKey] = useState("");
    const [ecommerceService, setEcommerceService] = useState("");
    const [selectedServiceModal, setSelectedServiceModal] = useState("");
    const [nextForm, setNextForm] = useState(false);
    const [contact, setContact] = useState({
        first_name : "",
        last_name : "",
        email : "",
    });
    const [phone , setPhone] = useState("");
    const [value, setValue] = useState({
        responsive : "",
        newsLetter : "",
        SEO : "",
        admin : "",
        multilingue : "",
        other : "",
    });
    const [price, setPrice] = useState({
        responsive : 0,
        newsLetter : 0,
        SEO : 0,
        admin : 0,
        multilingue : 0,
        other : 0,
    });
    const [languages, setLanguages] = useState([{languageSelect : ""}]);
    function checkService(event, data, priceService){
        const { name, checked } = event.target;
        setValue(formData=>({
            ...formData,
            [name] : checked ? data : "",
        }));
        setPrice(priceData=>({
            ...priceData,
            [name] : checked ? priceService : 0,
        }));
        if(data === "Comment" && !checked){
            setOtherService("");
        }
        if(data === "Multilingual website" && !checked){
            setLanguages([{languageSelect : ""}]);
        }
    }
    function resetValues(){
        setValue("");
        setPrice(0);
    }
    function setOtherServiceValue(event){
        if(event.key === "Enter"){
            document.createRange('\n');
        }
        setOtherService(event.target.value);
    }
    function addPage(event){
        setPageNumber(event.target.value);
    }
    function selectEcommerceService(event){
        setEcommerceService("");
        setEcommerceService(event.target.value);
    }
    function resetPageNumbers(){
        setPageNumber(0);
    }
    function selectServiceModal(event){
        setSelectedServiceModal("");
        setSelectedServiceModal(event.target.id);
        setContact("");
        setNextForm(false);
        setEcommerceService("");
    }
    function emptySelectServiceModal(){
        setSelectedServiceModal("");
        setContact("");
        setNextForm(false);
        setTextKey("");
        setEcommerceService("");
    }
    function handlLanguages(index, event){
        const updatedLanguages = [...languages];
        updatedLanguages[index][event.target.name] = event.target.value;
        setLanguages(updatedLanguages);
    }
    function addLanguage(){
        setLanguages([...languages, { languageSelect: '' }]);
        setPrice((prevPrice)=>({
            ...prevPrice,
            multilingue: prevPrice.multilingue + 150,
        }));
    }
    function deleteLanguage(index){
        const list = [...languages];
        list.splice(index, 1);
        setLanguages(list);
        setPrice((prevPrice)=>({
            ...prevPrice,
            multilingue: prevPrice.multilingue - 150,
        }));
    }
    let services = [
        { 
            service: value.responsive === undefined ? "" : value.responsive, 
            servicePrice: price.responsive === undefined ? 0 : price.responsive, 
            type: "reponsive"
        },
        { 
            service: value.newsLetter === undefined ? "" : value.newsLetter, 
            servicePrice: price.newsLetter === undefined ? 0 : price.newsLetter, 
            type: "newsLetter" 
        },
        { 
            service: value.SEO === undefined ? "" : value.SEO, 
            servicePrice: price.SEO === undefined ? 0 : price.SEO, 
            type: "seo" 
        },
        { 
            service: value.admin === undefined ? "" : value.admin, 
            servicePrice: price.admin === undefined ? 0 : price.admin, 
            type: "admin" 
        },
        { 
            service: value.multilingue === undefined ? "" : value.multilingue, 
            servicePrice: price.multilingue === undefined ? 0 : price.multilingue, 
            type: "multilingue" 
        },
        { 
            service: otherService, 
            servicePrice: price.other === undefined ? 0 : price.other, 
            type: "other" 
        },
    ]
    let sum = services.reduce((total, price)=>(price.servicePrice > 0 ? total + price.servicePrice : total), 0);
    let page_price = 20;
    return(
        <ContextServices.Provider value={{checkService, value, setOtherServiceValue, otherService, services, price, setPrice, resetValues, 
            addPage, pageNumber, page_price, sum, textKey, setTextKey, selectEcommerceService, ecommerceService, resetPageNumbers, 
            setOtherService, selectedServiceModal, selectServiceModal, emptySelectServiceModal, setSelectedServiceModal, contact, setContact, 
            nextForm, setNextForm, phone, setPhone, languages, setLanguages, addLanguage, deleteLanguage, handlLanguages
        }}>
            <Home/>
        </ContextServices.Provider>
    )
}