import styles from './Offers.module.css';
function Offers() {
    return (
        <div className={styles.offers}>
            <div className={styles.box}>
                <div className={styles.discount_div}>
                    Save 50%
                </div>
                <img src="/images/flower6.png" className={styles.offerImg} alt="flower offer"></img>
            </div>
            <div className={styles.box}>
                <div>
                    <div className={styles.offerName}>
                        Offer Name
                    </div>
                    <div className={styles.offerDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat temporibus mollitia atque minus in nostrum optio eveniet, ex reiciendis vel quisquam ab voluptatibus quis iste laborum sint illum accusamus?
                    </div>
                    <div className={styles.price}>
                        <span className={styles.oldPrice}>$500</span>
                        <span className={styles.newPrice}>$250</span>
                    </div>
                    <button className='button'>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Offers
