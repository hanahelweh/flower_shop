import React from 'react'
import styles from './Checkout.module.css'
import CheckoutItem from './CheckoutItem'
import {cartType} from '../SideNav/Cart'
import CheckoutInfo from './CheckoutInfo'
const cart : cartType[] = [
  {
      name:'flower1',
      price:230,
      image:'/images/flower1.png',
      quantity:1
  },{
      name:'flower2',
      price:290,
      image:'/images/flower2.png',
      quantity:2
  },
]
export default function Checkout() {
  return (
    <div className={`${styles.checkout} grid col2`}>
      <div className={styles.items}>
      {cart.map((item)=> 
        <CheckoutItem key={item.name} item={item}/>
      )} 
      </div>
      <div className={styles.info}>
        <CheckoutInfo />
      </div>
    </div>
  )
}