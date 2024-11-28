import styles from './ItemDetails.module.css'
import SubPagesHeader from '../ui/SubPagesHeader'
// import Quantity from './Quantity'
import Detail from './Detail';
import { useState } from 'react';
import { BsFillPatchCheckFill } from "react-icons/bs";

export interface ProductDetail {
  name: string;
  price: number;
  images: string[];
  description: string;
  guide: string;
}

const product: ProductDetail = {
  name: 'flower1',
  price: 230,
  images: ['/images/flower3.png', '/images/flower2.png', '/images/flower3.png', '/images/flower5.png', '/images/flower6.png'],
  description: 'description Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit nisi obcaecati recusandae libero est culpa illum veniam fuga ipsum suscipit harum consequatur necessitatibus quaerat eum dolor, explicabo, modi iure',
  guide: 'guide Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit nisi obcaecati recusandae libero est culpa illum veniam fuga ipsum suscipit harum consequatur necessitatibus quaerat eum dolor, explicabo, modi iure',
}
export default function ItemDetails() {
  const [current, setCurrent] = useState<string | null>('description');
  const [selectedAddons,setSelectedAddons] = useState<string>('');
  const [selectedSize,setSelectedSize] = useState<string>('s');
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
          
          {(['description', 'guide'] as const).map((detail) => (
            <Detail detail={detail} product={product} current={current} setCurrent={setCurrent}/>
          ))}
          <div className={`${styles.title} ${styles.marginTop20}`}>Size</div>
          <div className={styles.flexContainer}>
            <div className={`${styles.size} ${selectedSize==='s' ? styles.selected : ''}`} onClick={()=>setSelectedSize('s')}>
              <span>s </span>
              <span>(100 x 200 cm)</span>
            </div>
            <div className={`${styles.size} ${selectedSize==='m' ? styles.selected : ''}`} onClick={()=>setSelectedSize('m')}>
              <span>m </span>
              <span>(100 x 200 cm)</span>
            </div>
            <div className={`${styles.size} ${selectedSize==='l' ? styles.selected : ''}`} onClick={()=>setSelectedSize('l')}>
              <span>l </span>
              <span>(100 x 200 cm)</span>
            </div>
          </div>
          <div className={`${styles.title} ${styles.marginTop20}`}>Add Ons</div>
          <div className={styles.flexContainer}>
            <div className={styles.addons} onClick={()=>setSelectedAddons('')}>
              <img src="/images/flower1.png" alt="1" style={{border: selectedAddons === '' ? '2px solid black' : ''}}/>
              <div>No Thanks</div>
              <p>+$0</p>
            </div>
            {Array.from({length:2}).map((_,i)=>
            <div className={styles.addons} onClick={()=>setSelectedAddons(`${i}`)}>
              <img src="/images/flower1.png" alt="1" style={{border: selectedAddons === `${i}` ? '2px solid black' : ''}}/>
              <div>vase</div>
              <p>+$20</p>
            </div>)}
          </div>
          {/* <div className={styles.itemDetailQuantity}>
            <Quantity />
          </div> */}
          <div className={`${styles.btn} button`}>add to cart - {product.price}$</div>
          <div className={styles.note}>
            <div className={styles.icon}><BsFillPatchCheckFill/></div>
            <div>
              <div className={styles.ready}>
                <span>Ready to be delivered</span>
              </div>
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
