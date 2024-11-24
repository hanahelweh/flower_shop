import styles from './Landing.module.css';
function Landing() {
    return (
        <div className={styles.landing}>
            <div className={`${styles.landing_container}`}>
                <div className={`${styles.landing_content} flexi`}>
                    <img src="/images/white-flower.png" alt="landing_image1" />
                    <div className={styles.title_description}>
                        <div className={styles.title}>Floranza</div>
                        <div className={styles.description}>
                            Enjoy same-day delivery and exceptional service from our passionate team of florists. Let’s make every moment bloom!
                        </div>
                        <button className='button'>
                            Start Exploring
                        </button>
                    </div>
                    <div className={styles.shape1}>
                        <img src="/images/white-yasmin.png" alt="landing_image1" />
                        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="140" cy="140" rx="65" ry="140" fill="rgb(240, 236, 217)"/>
                            <ellipse cx="140" cy="140" rx="140" ry="65" fill="rgb(240, 236, 217)"/>
                        </svg>
                    </div>
                    <div className={styles.shape2}>
                        <img src="/images/flower-shape2.png" alt="landing_image2" />
                        <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="120" cy="120" rx="45" ry="120" fill="pink"/>
                            <ellipse cx="120" cy="120" rx="120" ry="45" fill="pink"/>
                        </svg>
                    </div>
                    <div className={styles.shape3}>
                        <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="75" cy="75" rx="40" ry="75" fill="rgb(246, 217, 221)"/>
                            <ellipse cx="75" cy="75" rx="75" ry="40" fill="rgb(246, 217, 221)"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Landing
