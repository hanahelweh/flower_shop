import styles from './ItemDetails.module.css'
import {ProductDetail} from './ItemDetails'
interface DetailProps{
    product:ProductDetail,
    detail: keyof ProductDetail
    current:string | null,
    setCurrent:(detail: string) => void;
}
export default function Detail({detail,product,current,setCurrent}:DetailProps) {
  return (
    <div>
      <div
            key={detail}
            onClick={() => setCurrent(detail)}
            className={styles.productInfo}
        >
            <div className={styles.title}>{detail}</div>
            {current !== null && current === detail && (
            <div className={styles.productText}>
                {detail === 'dimensions' ? (
                <>
                    <div>width: {product.dimensions.width} CM</div>
                    <div>height: {product.dimensions.height} CM</div>
                </>
                ) : (
                product[detail]
                )}
            </div>
            )}
        </div>
    </div>
  )
}
