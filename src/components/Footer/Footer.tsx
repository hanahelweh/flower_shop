import styles from './Footer.module.css';
import Social from './Social';
import { HiOutlineArrowSmallUp } from "react-icons/hi2";
function Footer() {
    const ScrollTop = () : void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer}>
                <div className={styles.row}>
                    <img src="/images/logo.png" alt="Logo" />
                    <div className={`${styles.buttons} btn dark sm`}>
                        <span>back to top</span>
                        <div onClick={ScrollTop}>
                            <span>
                                <HiOutlineArrowSmallUp />
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.socialTitle}>
                        Connect with us
                    </div>
                    <div className={styles.socials}>
                        <Social name="Facebook" href="" />
                        <Social name="Instagram" href="" />
                        <Social name="Linkedin" href="" />
                    </div>
                </div>
                <div className={styles.footerText}>
                    <div>Made with love for great people</div>
                    <div>Read Terms & Conditions and Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
