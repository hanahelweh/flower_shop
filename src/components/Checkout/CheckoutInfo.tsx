import React, { useState } from 'react'
import styles from './Checkout.module.css'
import Auth from '../Auth/Auth'
import Modal from '../Modal/Modal'
export default function CheckoutInfo() {
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
    return (
        <>
        <div className={styles.auth}>
            <div className={styles.title}>Email</div>
            {!isLoggedIn && <Modal>
                <Modal.Open windowName="auth">
                    <div className={styles.loginBtn}>Login</div>
                </Modal.Open>
                <Modal.Window windowName="auth">
                    <Auth/>
                </Modal.Window>
            </Modal>
            }
        </div>
        {isLoggedIn ? 
        <span>Welcome! | hanahelweh97@gmail.com</span>
        :
        <>
            <input type="text" className={styles.input} placeholder='Email' />
        </>
        }
        <div className={styles.shipping}>
            <div className={styles.title}>Shipping</div>
            <div className={`${styles.radioButtons} grid col2 gap10`}>
                <label>
                    <input type="radio" value="ship" name='delivery' />
                    <div>Ship</div>
                </label>
                <label>
                    <input type="radio" value="pickup" name='delivery' />
                    <div>Pickup</div>
                </label>
            </div>
            <div className={styles.gap}>
                <input type="text" className={styles.input} placeholder='Recipient Name' />
                <input type="text" className={styles.input} placeholder='Phone' />
                <input type="text" value='Australia' disabled={true} className={styles.input} placeholder='Country' />
                <input type="text" className={styles.input} placeholder='City' />
                <input type="text" className={styles.input} placeholder='Address' />
                <input type="text" className={styles.input} placeholder='Postcode' />
                <input type="text" className={styles.input} placeholder='Special Instructions (optional)' />
            </div>
        </div>
        </>
    )
}
