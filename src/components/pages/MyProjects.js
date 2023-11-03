import React, { useContext } from "react";
import { projects } from "../data/ProjectData";
import { isMore } from "../data/MoreProjects";
import { Lang } from "../../context/LangContext";

export default function MyProjects(){
    const {lang, getLang, uploadLang} = useContext(Lang);
    return(
        <div className="pt-4 pb-3" id="projects">
            <div className="text-center header-section position-relative">
                <h3 className="pb-3">{lang.project || uploadLang.project}</h3>
            </div>
            <div className="row justify-content-center">
                {projects.map((project, index)=>(
                    <div className="col-md-4 mt-3 flip-card" key={project.id}>
                        <div className="flip-card-inner position-relative">
                            <div className="flip-card-front">
                                <img src={project.image} className="img-fluid h-100" alt={project.image_alt} />
                                <div className="position-absolute top-0 w-100 h-100 bg-dark opacity-50"></div>
                                <div className="position-absolute top-50 w-100 text-center text-white">
                                    <h4>
                                        {
                                            getLang === "en" ? project.project_name_english : 
                                            getLang === "fr" ? project.project_name_french :
                                            getLang === "ar" ? project.project_name_arabic :
                                            project.project_name_english
                                        }
                                    </h4>
                                </div>
                            </div>
                            <div className="flip-card-back p-3">
                                <p className="text-start text-justify">
                                    {
                                        getLang === "en" ? project.project_description_english : 
                                        getLang === "fr" ? project.project_description_french :
                                        getLang === "ar" ? project.project_description_arabic :
                                        project.project_description_english
                                    }
                                </p>
                                <h5>
                                    {project.link !== "" ? 
                                        <a href={project.link} target="_blank" rel="noreferrer" className="text-white">
                                            {lang.link_project || uploadLang.link_project}
                                        </a> 
                                    : "" }
                                </h5>
                            </div>
                            <hr/>
                        </div>
                    </div>
                ))}
                {isMore && <div className="col-md-12 my-5">
                    <div className="d-flex align-items-center justify-content-center">
                        <h3 className="text-center">{lang.additionnal || uploadLang.additionnal}</h3>
                        <div className={getLang === "ar" ? "dot-pulse anim-ar display-dot" : "dot-pulse anim display-dot"}></div>
                    </div>
                </div>}
            </div>
        </div>
    )
}