import styles from './Testimonials.module.css'
import { PiQuotesThin } from "react-icons/pi";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useState } from 'react';
const testimonials : {text:string;author:string}[]=[
    { text: "The flowers were fresh and beautifully arranged! My friend was thrilled with the surprise.", author: "Emma J." },
    { text: "Excellent service and stunning bouquets. I’ve ordered several times and am always impressed!", author: "Michael L." },
    { text: "Perfect for any occasion! The arrangements are elegant and last longer than expected.", author: "Sophia R." },
    { text: "Great customer service! They went above and beyond to make my anniversary bouquet special.", author: "David P." },
    { text: "Absolutely loved the variety of flowers and arrangements. Beautiful and affordable!", author: "Olivia W." },
    { text: "Their flower selection is incredible, and delivery was so fast. Highly recommend!", author: "Lucas T." },
    { text: "These flowers added the perfect touch to our wedding. So fresh and vibrant!", author: "Lily M." },
    { text: "I appreciate the quality and care put into each bouquet. Will definitely order again.", author: "James S." },
    { text: "The flower shop exceeded my expectations. My wife loved the flowers. Thank you!", author: "Chris B." },
    { text: "Gorgeous flowers, great prices, and friendly staff. My go-to place for flowers.", author: "Emily K." }
]
function Testimonials() {
    const[current,setCurrent] = useState<number>(0);
    const NextTestimonial=()=>{
        if(current!==testimonials.length - 1)
        setCurrent(current+1)
        else
        setCurrent(0)
    }
    const PreviousTestimonial=()=>{
        if(current!==0)
        setCurrent(current-1)
        else
        setCurrent(testimonials.length-1)
    }
    return (
        <div className={styles.testimonials_container}>
            <div className={styles.testimonials}>
                <div className={styles.icon}>
                    <PiQuotesThin />
                </div>
                <div>
                    <div className={styles.text}>{testimonials[current].text}</div>
                    <div className={styles.name}>{testimonials[current].author}</div>
                </div>
            </div>
            <div className={`${styles.buttons} btn light`}>
                <div onClick={PreviousTestimonial}>
                    <span>
                        <HiOutlineArrowSmallLeft />
                    </span>
                </div>
                <div onClick={NextTestimonial}>
                    <span>
                        <HiOutlineArrowSmallRight />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
