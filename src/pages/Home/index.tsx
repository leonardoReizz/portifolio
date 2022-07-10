

import { Sidebar } from "../../components/sidebar";
import styles from "./styles.module.sass";
import { Page, Scroll, useMotionValue, Frame, useTransform } from "framer"
import Logo from "../../assets/bg.png"
import { 
    Animator,
    batch, Fade,
    MoveIn, 
    MoveOut, 
    ScrollContainer, 
    ScrollPage,
    Sticky, 
    Zoom 
} from "react-scroll-motion";
import { Link } from "react-router-dom";
import { Link as LinkScrool } from "react-scroll"
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { DiSass } from "react-icons/di";

import codeImg from "../../assets/code.png";
import discordCloneImg from "../../assets/discordCloneImg.png";
import loginSystemImg from "../../assets/loginSystemImg.png";
import dashboardImg from "../../assets/dashboardImg.png";
import electronImg from "../../assets/electronImg.png";
import { useState } from "react";
import { ModalProject } from "../../components/ModalProjects";


export function Home(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [id, setId] = useState(1);
    function handleOpenModal(id: number){
        setId(id)
        setModalIsOpen(true)
    }
    function handleCloseModal(){
        setModalIsOpen(false)
    }

    return(
        <>
            <div className={styles.container}>
                <Sidebar/>
                <ModalProject modalIsOpen={modalIsOpen} handleCloseModal={handleCloseModal} id={id}/>
              
                <div className={styles.content} id="home">
                    <div className={styles.details}>
                        <div className={styles.title}>
                            <h1>HELLO</h1>
                            <h2 className={styles.animation}>Eu Sou Desenvolvedor Front-end.</h2>
                        </div>
                        <div className={styles.linkAbout}>
                            <LinkScrool to="about" spy={true} smooth={true}>Sobre mim</LinkScrool>
                        </div>
                        <div className={styles.network}>
                            
                        </div>
                    </div>
                </div>
                     
                      
                  
                        
                <div className={styles.about} id="about">
                    <div className={styles.img}>
                        <img src={codeImg} alt="" />
                    </div>
                    <div className={styles.details}>
                        <h1>Lorem ipsum dolor sit amet consectetur</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, similique quae aut nostrum at eaque debitis pariatur quisquam incidunt amet? Magni nostrum amet modi. Asperiores nulla numquam necessitatibus est amet.</p>
                        <div className={styles.networking}>
                            <h4>Minhas Redes</h4>
                            <div className={styles.icons}>
                                <a href="https://github.com/leonardoReizz" target="_blank">
                                    <AiFillGithub/>
                                </a>
                                <a href="https://www.linkedin.com/in/leonardo-reis-022830233/" target="_blank">
                                    <AiFillLinkedin/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                           
                        
                  
                <div className={styles.skillsContent} >
                    <div className={styles.skills} id="skills">
                        <div className={styles.skill}>
                            <div className={styles.skillLogo}>
                                <AiFillHtml5/>
                            </div>
                            <h1>HTML</h1>
                        </div>
                        <div className={styles.skill}>
                            <div className={styles.skillLogo}>
                                <DiCss3/>
                            </div>
                            <h1>CSS</h1>
                        </div>
                        <div className={styles.skill}>
                            <div className={styles.skillLogo}>
                                <IoLogoJavascript/>
                            </div>
                            <h1>JavaScript</h1>
                        </div>
                        <div className={styles.skill}>
                            <div className={styles.skillLogo}>
                                <GrReactjs/>
                            </div>
                            <h1>ReactJS</h1>
                        </div>
                        <div className={styles.skill}>
                            <div className={styles.skillLogo}>
                                <SiTypescript/>
                            </div>
                            <h1>Typescript</h1>
                        </div>
                        <div className={styles.skill}>
                            <div className={styles.skillLogo}>
                                <DiSass/>
                            </div>
                            <h1>Sass</h1>
                        </div>
                        <div className={styles.skill}>
                            <div className={styles.skillLogo}>
                                <DiMongodb/>
                            </div>
                            <h1>MongoDB</h1>
                        </div>
                        <div className={styles.skill}>
                            <div className={styles.skillLogo}>
                                <SiMysql/>
                            </div>
                            <h1>Mysql</h1>
                        </div>
                    </div>
                </div>
                           
                       
                <div className={styles.projectsContent} id="projects">
                    <div className={styles.projects} >
                        <div className={styles.project}>
                            <div className={styles.projectLogo}>
                                <img 
                                    src={discordCloneImg} 
                                    alt="" 
                                    onClick={()=>handleOpenModal(1)}
                                />
                            </div>
                            <h1>Discord Clone</h1>
                        </div>
                        <div className={styles.project}>
                            <div className={styles.projectLogo}>
                                <img 
                                    src={loginSystemImg} 
                                    alt=""
                                    onClick={()=>handleOpenModal(2)} 
                                />
                            </div>
                            <h1>Sistema de Login</h1>
                        </div>
                        <div className={styles.project}>
                            <div className={styles.projectLogo}>
                                <img 
                                    src={dashboardImg} 
                                    alt="" 
                                    onClick={()=>handleOpenModal(3)}
                                />
                            </div>
                            <h1>Dashboard</h1>
                        </div>
                        <div className={styles.project}>
                            <div className={styles.projectLogo}>
                                <img 
                                    src={electronImg} 
                                    alt="" 
                                    onClick={()=>handleOpenModal(4)}
                                />
                            </div>
                            <h1>Sistema de Vendas</h1>
                        </div>
                    </div>
                </div>

                <div className={styles.contactsContent} id="contact">
                    <div className={styles.contacts} >
                            <h1>Contato</h1>
                        <div className={styles.contact}>
                            <a href="">Email: leonardoo.reis@hotmail.com</a>
                            <a href="https://github.com/leonardoReizz" target="_blank">
                                Github <AiFillGithub/>
                            </a>
                            <a href="https://www.linkedin.com/in/leonardo-reis-022830233/" target="_blank">
                                Linkedin <AiFillLinkedin/>
                            </a>

                        </div>
                    </div>
                </div>
                        
                
                  
            </div>
        </>
    )
}