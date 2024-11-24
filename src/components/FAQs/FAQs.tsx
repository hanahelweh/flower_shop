import { useState } from 'react';
import styles from './FAQs.module.css'
const faqs=[
    {
        question:'How can I place an order for a custom floral arrangement?',
        answer:"To order a custom floral arrangement, simply contact us through our website, call us directly, or visit our store. We'll work with you to design the perfect bouquet tailored to your preferences and occasion"
    },{
        question:'What delivery options do you offer, and is same-day delivery available?',
        answer:"We offer standard and express delivery options. Same-day delivery is available for orders placed before [time, e.g., 12 PM]. Delivery times may vary depending on your location"
    },
    {
        question:'How do I care for my flowers to ensure they last as long as possible?',
        answer:"To keep your flowers fresh, trim the stems, change the water every two days, and keep them in a cool, shaded area away from direct sunlight and heat sources"
    },
    {
        question:'Do you offer flowers for special events, such as weddings or corporate gatherings?',
        answer:"Yes, we specialize in floral arrangements for all types of events, including weddings, corporate functions, and private gatherings. Contact us to discuss your event needs and explore our range of options"
    },
    {
        question:"What if I'm not satisfied with my order? Can I request a replacement or refund?",
        answer:"Customer satisfaction is our priority. If there are any issues with your order, please reach out to us within [specific timeframe, e.g., 24 hours of delivery] to discuss a replacement or refund options"
    },
]
function FAQs() {
    const [current, setCurrent] = useState<number | null>(null);
    return (
        <div className={styles.container}>
            <div className={styles.title}>Sprouting Answers to Common Questions</div>
            {faqs.map((faq,index)=>
                <div key={index} onClick={()=>setCurrent(index)} className={styles.faq}>
                    <div className={styles.number}>{index < 10 ? `0${index+1}` : `${index+1}`}</div>
                    <div>
                        <div className={styles.question}>{faq.question}</div>
                        {current !== null && current===index && <div className={styles.answer}>{faq.answer}</div>}
                    </div>
                </div>
            )}
        </div>
    )
}

export default FAQs
