import React, { useContext, useEffect } from "react";
import { projects } from "../data/ProjectData";
import { isMore } from "../data/MoreProjects";
import { Lang } from "../../context/LangContext";
import { useInView } from "react-intersection-observer";

export default function MyProjects(){
    const {lang, getLang, uploadLang} = useContext(Lang);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    useEffect(()=>{
        if(inView){
            const elements = document.querySelectorAll('.slide-in_project');
            elements.forEach((element)=>{
                element.classList.add('slide-in-visible');
            });
        }
    }, [inView]);
    return(
        <div ref={ref} id="projects" className="slide-in_project">
            <div className="text-center header-section position-relative">
                <h3 className="pb-2">{lang.project || uploadLang.project}</h3>
            </div>
            <div className="row justify-content-center">
                {projects.map((project, index)=>(
                    <div className="col-lg-4 col-md-6 mt-3" key={project.id}>
                        <div className="position-relative h_card">
                            <img src={project.image} className="img-fluid h-100 image" alt={project.image_alt} />
                            <div className="position-absolute top-0 w-100 h-100 bg-dark opacity-75"></div>
                            <div className="position-absolute top-50 w-100 text-center text-white px-2">
                                <h4>
                                    <strong>
                                        {
                                            getLang === "en" ? project.project_name_english : 
                                            getLang === "fr" ? project.project_name_french :
                                            getLang === "ar" ? project.project_name_arabic :
                                            project.project_name_english
                                        }
                                    </strong>
                                </h4>
                            </div>
                            <div className="overlay">
                                <div className="position-absolute text-white p-3 w-100">
                                    <p className="text-center">
                                        {
                                            getLang === "en" ? project.project_description_english : 
                                            getLang === "fr" ? project.project_description_french :
                                            getLang === "ar" ? project.project_description_arabic :
                                            project.project_description_english
                                        }
                                    </p>
                                    <ul>
                                        <li>
                                            {
                                                getLang === "en" ? project.project_description_english_list1 :
                                                getLang === "fr" ? project.project_description_french_list1 :
                                                getLang === "ar" ? project.project_description_arabic_list1 :
                                                project.project_description_english_list1
                                            }
                                        </li>
                                        <li>
                                            {
                                                getLang === "en" ? project.project_description_english_list2 :
                                                getLang === "fr" ? project.project_description_french_list2 :
                                                getLang === "ar" ? project.project_description_arabic_list2 :
                                                project.project_description_english_list2
                                            }
                                        </li>
                                        <li>
                                            {
                                                getLang === "en" ? project.project_description_english_list3 :
                                                getLang === "fr" ? project.project_description_french_list3 :
                                                getLang === "ar" ? project.project_description_arabic_list3 :
                                                project.project_description_english_list3
                                            }
                                        </li>
                                        <li>
                                            {
                                                getLang === "en" ? project.project_description_english_list4 :
                                                getLang === "fr" ? project.project_description_french_list4 :
                                                getLang === "ar" ? project.project_description_arabic_list4 :
                                                project.project_description_english_list4
                                            }
                                        </li>
                                        <li>
                                            {
                                                getLang === "en" ? project.project_description_english_list5 :
                                                getLang === "fr" ? project.project_description_french_list5 :
                                                getLang === "ar" ? project.project_description_arabic_list5 :
                                                project.project_description_english_list5
                                            }
                                        </li>
                                    </ul>
                                    <h5 className="text-center mt-5">
                                        {project.link !== "" ? 
                                            <a href={project.link} target="_blank" rel="noreferrer" className="text-white text-decoration-none border border-white py-2 px-5">
                                                {lang.link_project || uploadLang.link_project}
                                            </a> 
                                        : "" }
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {isMore && <div className="col-md-12 mt-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <h3 className="text-center">{lang.additionnal || uploadLang.additionnal}</h3>
                        <div className={getLang === "ar" ? "dot-pulse anim-ar display-dot" : "dot-pulse anim display-dot"}></div>
                    </div>
                </div>}
            </div>
        </div>
    )
}