import styles from './SideNav.module.css';
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import {Link} from 'react-router-dom';
import { useState } from 'react';
export default function Menu() {
    const [isDropped,setIsDropped]=useState<boolean>(false);
  return (
    <>
        <div>
            <div className={styles.sideNav_content_header}>menu</div>
            <div className={styles.sideNav_content_navigations}>
                <div className={styles.link}><Link to="/all-products">All Products</Link></div>
                <div className={styles.link}><Link to="/ready-to-go">Ready To Go</Link></div>
                <div className={styles.link}><Link to="/bundles">Bundles</Link></div>
                <div className={styles.link}><Link to="/roses">Roses</Link></div>
                <div className={styles.link}><Link to="/boxes">Boxes</Link></div>
                <div className={styles.link}><Link to="/plants">Plants</Link></div>
                <div>
                    <div onClick={()=>setIsDropped(!isDropped)} className={styles.sideNav_content_navigations_drop}>
                        <span>Occasions</span>
                        <GoPlus />
                    </div>
                    {isDropped && (
                        <div>
                            <div>New Baby</div>
                            <div>Engagement</div>
                            <div>Wedding</div>
                            <div>Birthday</div>
                            <div>Graduation</div>
                            <div>Get well</div>
                            <div>just Sorry</div>
                        </div>
                    )}
                </div>
                <div className={styles.link}><Link to="/about">About Us</Link></div>
            </div>
        </div>
        <div>
            <div className={styles.sideNav_content_header}>get in touch</div>
            <div className={styles.sideNav_content_getInTouch}>
                <div>email@gmail.com | +542-680642</div>
                <div>8635 richmoun street 976, boston</div>
                <div>Tx,5578, USA</div>
            </div>
            <div className={styles.sideNav_content_header}>follow us</div>
            <div className={styles.sideNav_content_social}>
                <SlSocialFacebook   />
                <SlSocialInstagram />
                <SlSocialTwitter />
                <PiTelegramLogo />
            </div>
        </div>
    </>
  )
}
