import styles from "./styles.module.sass";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-scroll'
export function Sidebar(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <ul>
                        <li>
                            <Link to="home" spy={true} smooth={true}>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true}>
                                Sobre
                            </Link>
                        </li>
                        </ul>
                        <h3>Leonardo Reis</h3>
                        <ul>
                        <li>
                            <Link to="skills" spy={true} smooth={true}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" spy={true} smooth={true}>
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true}>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}