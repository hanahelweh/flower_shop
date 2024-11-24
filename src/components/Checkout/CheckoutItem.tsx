import React from 'react'
import styles from './Checkout.module.css'
import {cartType} from '../SideNav/Cart'
export default function CheckoutItem({item}:{item:cartType}) {
  return (
    <div className={styles.cartItem}>
        <img src={item.image} alt={item.name} />
        <div>
            <div className={styles.itemName}>{item.name}</div>
            <div className={styles.itemPrice}>${item.price}</div>
            <div className={styles.itemQuantity}>x{item.quantity}</div>
        </div>
    </div>
  )
}
