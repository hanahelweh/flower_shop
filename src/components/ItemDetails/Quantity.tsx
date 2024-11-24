import { useState } from 'react';
import styles from './ItemDetails.module.css'
const quantityLimit = 10;
function Quantity() {
    const [quantity, setQuantity] = useState<number>(1);
    return (
        <div className='quantity'>
            <button
                disabled={quantity === 1}
                onClick={() => setQuantity((q) => q - 1)}
                className={styles.inc_decBtn}>
                -
            </button>
            <div>{quantity}</div>
            <button 
            disabled={quantity === quantityLimit} 
            onClick={() => setQuantity((q) => q + 1)} 
            className={styles.inc_decBtn}>
                +
            </button>
        </div>
    )
}

export default Quantity
