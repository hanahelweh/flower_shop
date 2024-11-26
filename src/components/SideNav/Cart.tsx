import { Link } from 'react-router-dom';
import Quantity from '../ItemDetails/Quantity';
import styles from './SideNav.module.css';
import { AiFillDelete } from "react-icons/ai";
export interface cartType{
    name:string;
    price:number;
    image:string;
    quantity:number;
}
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
export default function Cart() {
  return (
    <div className={styles.cartContainer}>
        {cart.length ? 
        <>
            <div className={styles.sideNav_content_header}>cart</div>
            <div className={styles.items}>
                {cart.map((item)=> 
                <div className={styles.cartItem}>
                    <img src={item.image} alt={item.name} />
                    <div>
                        <div className={styles.itemName}>{item.name}</div>
                        <div className={styles.itemPrice}>${item.price}</div>
                        <div className={styles.actions}>
                            <div>
                                <div className={styles.cartQuantity}>
                                    <Quantity />
                                </div>
                            </div>
                            <div className={`${styles.delete} btn light sm`}>
                                <div><AiFillDelete /></div>
                            </div>
                        </div>
                    </div>
                </div>
                )} 
            </div>
            <div className={styles.cartFooter}>
                <div>Taxes and shipping calculated at checkout</div>
                <div className='button'>Proceed to checkout - $520</div>
            </div>
        </>
        :
        <div className={styles.emptyCart}>
            <div>You cart is empty</div>
            <Link to="/all-products" className="button">Browse all products</Link>
        </div>
        }
    </div>
  )
}
