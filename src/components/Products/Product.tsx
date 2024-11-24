import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Products.module.css'
import { PiHandbagThin } from "react-icons/pi";
import {productProps} from './Products'
import { Link } from 'react-router-dom';

function Product({product}:{product:productProps}) {
    const productRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    useGSAP(() => {
        //trigger animation start on scroll
        const scrollTriggerConfig = {
            trigger: productRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
        };
        //box animation
        gsap.fromTo(
            productRef.current,
            { opacity: 0, scaleX: 0 },
            {
                opacity: 1,
                scaleX: 1,
                duration: 1,
                scrollTrigger: scrollTriggerConfig,
            }
        );
        //display the image after box animation
        gsap.fromTo(
            imageRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                delay: 1,
                scrollTrigger: scrollTriggerConfig,
            }
        );
    });    
    return (
            <Link to="/products/details">
        <div ref={productRef} className={`product-section ${styles.products_container_lazyLoading}`}>
                <div className={`${styles.products_container_hover} btn light sm`}>
                    <div><span><PiHandbagThin/></span></div>
                </div>
                <img ref={imageRef} src={product.image} alt={product.name} />
                <div className={styles.product_info}>
                    <div className={styles.product_name}>
                        {product.name}
                        </div>
                    <div className={styles.product_price}>
                        {product.price}$
                    </div>
                </div>
        </div>
            </Link>
    )
}

export default Product
