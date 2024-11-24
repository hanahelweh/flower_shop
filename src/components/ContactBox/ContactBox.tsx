import styles from './ContactBox.module.css'
function ContactBox() {
    return (
        <div className={styles.container}>
            <div className={styles.contactBox}>
                <div className={styles.title}>Looking for a More Customized Floral Design?</div>
                <div className={styles.contact_us}>
                    <button className='button'>Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default ContactBox
