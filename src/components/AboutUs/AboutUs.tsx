import styles from './AboutUs.module.css'
import SubPagesHeader from '../ui/SubPagesHeader'
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa6";
const features = [
    'Fresh Daily Blooms','Customized Floral Designs','Eco-Friendly Practices','Event & Wedding Specialists','Flower Care Guide',
    'Gift Bundles','Personalized Message Cards'
]
const services = [
    {title:'bundles',img:'bundle.jpg'},
    {title:'boxes',img:'box.jpg'},
    {title:'roses',img:'rose.jpg'},
    {title:'plants',img:'plant.jpg'},
    {title:'occasions',img:'occasion.jpg'},
]
function AboutUs() {
    return (
        <>
            <SubPagesHeader text='About Us' />
            <div className={styles.container}>
                <div className={styles.about}>
                    <div className={styles.description}>
                        <div>Welcome to Floranza, where we believe that flowers have a unique power to brighten any moment and bring people closer together. Since [Year Founded], our family-owned business has been dedicated to providing stunning floral arrangements and personalized service to our community. Each bouquet is crafted with care, using the freshest blooms handpicked by our talented florists. Whether you're celebrating a special occasion, expressing heartfelt sentiments, or simply adding a touch of beauty to your day, we’re here to help you find the perfect flowers. Thank you for trusting us to be a part of your most cherished moments!</div>
                        <div className={styles.features}>
                            {features.map((feature)=>
                                <div className='button sm'>{feature}</div>
                            )}
                        </div>
                    </div>
                    <img src="/images/about.jpg" alt="about" />
                </div>
                <div className={styles.services}>
                    <div className={styles.title}>services</div>
                    {services.map((service)=><div>
                        <div key={service.title} className={styles.service}>
                            {service.title}
                            <img src={`/images/${service.img}`} alt={service.title} />
                        </div>
                    </div>)}
                </div>
                <div className={styles.margin}>
                    <div className={styles.title}>contact us</div>
                    <div className={styles.row}>
                        <div className={styles.row_element}>
                            <div className={styles.icon}><PiPhoneCallFill /></div>
                            <div>
                                <div className={styles.row_element_title}>Phone</div>
                                <div className={styles.row_element_text}>+865 757 79865</div>
                            </div>
                        </div>
                        <div className={styles.row_element}>
                            <div className={styles.icon}><MdEmail /></div>
                            <div>
                                <div className={styles.row_element_title}>Email</div>
                                <div className={styles.row_element_text}>floranza@gmail.com</div>
                            </div>
                        </div>
                        <div className={styles.row_element}>
                            <div className={styles.icon}><FaAddressBook /></div>
                            <div>
                                <div className={styles.row_element_title}>address</div>
                                <div className={styles.row_element_text}>Sydney, Australia</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputs}>
                        <input type="text" className="input" placeholder='Name'/>
                        <input type="text" className="input" placeholder='Email'/>
                        <textarea className="input" placeholder='Message' rows={4}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
