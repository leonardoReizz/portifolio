import { style } from "@mui/system"
import { useEffect, useState } from "react"
import { Carousel } from "react-responsive-carousel";

import Modal from "react-modal"
import { projectsData } from "../../data/projectsData"
import styles from "./styles.module.sass"
import img1 from "../../assets/discordClone/img1.png"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface ModalProjectProps{
  modalIsOpen: boolean
  handleCloseModal: ()=>void
  id: number
}
interface data{
    id: number;
    title: string;
    description: string;
    using: string;
    linkRepository: string;
    linkApplication: string;
    img1: string;
    img2: string;
    img3: string
}

export function ModalProject({handleCloseModal, modalIsOpen, id}: ModalProjectProps){
    
    const [data, setData] = useState<data>();
    useEffect(() => {
      console.log(id)
      projectsData.map((data)=>data.id === id && setData(data))
    }, [modalIsOpen])
      
    return (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          overlayClassName={styles.overlay}
          className={styles.content}
        >
          <div className={styles.container}>
            <div className={styles.closeButton}>
              <button onClick={handleCloseModal}>X</button>
            </div>
            <div className={styles.img}>
              <Carousel 
                autoPlay={true} 
                infiniteLoop={true} 
                showThumbs={false}
                >
                <div>
                    <img src={data?.img1} />
                    
                </div>
                <div>
                    <img src={data?.img2} />
                    
                </div>
                <div>
                    <img src={data?.img3} />
                    
                </div>
                
              </Carousel>
            </div>
            <div className={styles.details}>
              <h1>{data?.title}</h1>
              <p>{data?.description}</p>

            <div className={styles.detailsInfo}>
              <h2>Tecnologias Utilizadas:</h2>
              <span>{data?.using}</span>

              {
                data?.linkApplication === "" ? "" : <h3>Acesse a Aplicação: <a href={data?.linkApplication} target="_blank">Acesse Aqui</a></h3>
              }
              <h3>Acesse o Repositorio: <a href={data?.linkRepository} target="_blank">Acesse Aqui</a></h3>
            </div>
            </div>
          </div>
        </Modal>
    )
}

