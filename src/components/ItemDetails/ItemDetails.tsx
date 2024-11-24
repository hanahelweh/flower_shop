import styles from './ItemDetails.module.css'
import SubPagesHeader from '../ui/SubPagesHeader'
import Quantity from './Quantity'
import Detail from './Detail';
import { useState } from 'react';
import { BsFillPatchCheckFill } from "react-icons/bs";
interface Dimensions {
  width: number;
  height: number;
}

export interface ProductDetail {
  name: string;
  price: number;
  images: string[];
  description: string;
  guide: string;
  dimensions: Dimensions;
}

const product: ProductDetail = {
  name: 'flower1',
  price: 230,
  dimensions: {
    width: 200,
    height: 300
  },
  images: ['/images/flower3.png', '/images/flower2.png', '/images/flower3.png', '/images/flower5.png', '/images/flower6.png'],
  description: 'description Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit nisi obcaecati recusandae libero est culpa illum veniam fuga ipsum suscipit harum consequatur necessitatibus quaerat eum dolor, explicabo, modi iure',
  guide: 'guide Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit nisi obcaecati recusandae libero est culpa illum veniam fuga ipsum suscipit harum consequatur necessitatibus quaerat eum dolor, explicabo, modi iure',
}
export default function ItemDetails() {
  const [current, setCurrent] = useState<string | null>('description');
  
  return (
    <>
      <SubPagesHeader />
      <div className={styles.container}>
        <div>
          <div className={styles.images}>
            {product.images.map((image: string, i: number) =>
              <img key={i} src={image} alt={`${product.name}-${i}`} />
            )}
          </div>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productName}>
            {product.name}
          </div>
          {(['description', 'guide', 'dimensions'] as const).map((detail) => (
            <Detail detail={detail} product={product} current={current} setCurrent={setCurrent}/>
          ))}
          <div className={styles.itemDetailQuantity}>
            <Quantity />
          </div>
          <div className={`${styles.btn} button`}>add to cart - {product.price}$</div>
          <div className={styles.note}>
            <div className={styles.icon}><BsFillPatchCheckFill/></div>
            <div>
              <div>
                Pickup available at 1420 Notre-Dame W
              </div>
              <div>
                Usually ready in 2-4 days
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
