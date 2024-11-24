import styles from './SideNav.module.css';
import { PiHandbagThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import React from 'react'
import Menu from './Menu';
import Cart from './Cart';
import Modal from '../Modal/Modal';
import Auth from '../Auth/Auth';
type OpenPanel = 'menu' | 'cart' | null;
function SideNav() {
    const [isOpen,setIsOpen]=useState<OpenPanel>(null);
    const togglePanel = (panel: OpenPanel) => {
        if (isOpen === panel) {
            setIsOpen(null);
        } else {
            setIsOpen(panel);
        }
    };
    return (
        <>
        <div className={styles.sideNav}>
            <div aria-label="Toggle menu">
                {isOpen === null ? 
                <div onClick={()=> togglePanel('menu')} className={styles.sideNav_menu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                :
                <div onClick={()=> togglePanel(null)} className={styles.sideNav_close}>
                    <div></div>
                    <div></div>
                </div>
                }
            </div>
            <div>
                <div onClick={()=> togglePanel('cart')}>
                    <PiHandbagThin className={styles.sideNav_icon}/>
                </div>
                <Modal>
                    <Modal.Open windowName='auth'>
                        <CiUser className={styles.sideNav_icon}/>
                    </Modal.Open>
                    <Modal.Window windowName='auth'>
                        <Auth />
                    </Modal.Window>
                </Modal>
                <Link to="/">
                    <img className={styles.sideNav_logo} src="/images/logo-black.png" alt="logo" />
                </Link>
            </div>
        </div>
            <div className={styles.sideNav_content} style={{transform: isOpen === 'menu' ? 'translateX(0)' : 'translateX(100%)'}}>
                {isOpen === 'menu' && <Menu />}              
            </div>
            <div className={styles.sideNav_content} style={{transform: isOpen === 'cart' ? 'translateX(0)' : 'translateX(100%)'}}>
                {isOpen === 'cart' && <Cart />}
            </div>
        </>
    )
}

export default SideNav
