import ContactBox from "./ContactBox/ContactBox"
import FAQs from "./FAQs/FAQs"
import Landing from "./Landing/Landing"
import Offers from "./Offers/Offers"
import Products from "./Products/Products"
import Testimonials from "./Testimonials/Testimonials"
import TextAnimation from "./ui/TextAnimation"
import TextAnimation2 from "./ui/TextAnimation2"

function Home() {
    return (
        <>
            <Landing />
            <div className='home_animatedText'>
                <TextAnimation/>
            </div>
            <Products />
            <div className='home_animatedText'>
                <TextAnimation2 text="Nurturing moments with floral elegance" flower={true}/>
            </div>
            <Offers />
            <Testimonials />
            <ContactBox />
            <FAQs />
        </>
    )
}

export default Home
