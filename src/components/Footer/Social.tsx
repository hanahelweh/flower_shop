import styles from './Footer.module.css';
import { MdArrowOutward } from "react-icons/md";
interface socialProps {
    href:string;
    name:string
}
function Social({href,name} : socialProps) {
    return (
        <div className={styles.socialIcon}>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <span>{name}</span>
                <MdArrowOutward  className={styles.arrow}/>
            </a>
        </div>
    )
}

export default Social
