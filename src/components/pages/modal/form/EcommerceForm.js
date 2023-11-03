import React, { useContext } from "react";
import PagesAdded from "./PagesAdded";
import Functionalities from "./Funcionalities";
import { ContextServices } from "../../../../context/ServiceContext";

export default function EcommerceForm({service}){
    const {selectEcommerceService, ecommerceService} = useContext(ContextServices);
    return(
        <div>
            <h4 className="mt-3 text-center">Service : {service}</h4>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <div className="d-flex justify-content-between">
                        <label htmlFor="ecommerce_service" className="form-label me-3 mt-lg-1">Ecommerce Service: </label>
                        <select className="form-select w-75" id="service-select" onChange={selectEcommerceService} value={ecommerceService}>
                            <option value="">-- Please choose your e-commerce service service --</option>
                            <option value="delivery">Pay on delivery only</option>
                            <option value="creditCard_delivery">Credit card payment and pay on delivery</option>
                        </select>
                    </div>
                </div>
            </div>
            {ecommerceService && <>
                <div className="row">
                    <PagesAdded />
                </div>
                <div className="row">
                    <Functionalities />
                </div>
            </>}
        </div>
    )
}