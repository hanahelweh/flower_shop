import Product from './Product'
import styles from './Products.module.css';
export interface productProps {
    name:string;
    price:number;
    image:string
}
const products : productProps[] = [
    { name: 'flower1', price: 230, image: '/images/flower1.png' },
    { name: 'flower2', price: 350, image: '/images/flower2.png' },
    { name: 'flower3', price: 345, image: '/images/flower3.png' },
    { name: 'flower5', price: 150, image: '/images/flower5.png' },
    { name: 'flower6', price: 344, image: '/images/flower6.png' },
    { name: 'flower8', price: 320, image: '/images/flower8.png' }
];
function Products() {
    return (
        <div className={styles.productsSection}>
            <div className={styles.products}>
                <div className={styles.products_title}>Our Best Sellers</div>
                <div className={styles.products_description}>Explore what everyone is talking about and find your new favorites today! Join the countless satisfied customers who have made these products their go-to choice</div>
                <div className={styles.products_container}>
                    {products.map((product, index) =>
                        <Product key={index} product={product}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;