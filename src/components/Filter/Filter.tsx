import { useParams } from "react-router-dom";
import styles from './Filter.module.css'
import Product from '../Products/Product'
import Testimonials from '../Testimonials/Testimonials'
import SubPagesHeader from "../ui/SubPagesHeader";
const products = [
  { name: 'flower1', price: '230$', image: '/images/flower1.png' },
  { name: 'flower2', price: '350$', image: '/images/flower2.png' },
  { name: 'flower3', price: '345$', image: '/images/flower3.png' },
  { name: 'flower5', price: '150$', image: '/images/flower5.png' },
  { name: 'flower6', price: '344$', image: '/images/flower6.png' },
  { name: 'flower8', price: '320$', image: '/images/flower8.png' },
  { name: 'flower6', price: '344$', image: '/images/flower6.png' },
  { name: 'flower8', price: '320$', image: '/images/flower8.png' },
  { name: 'flower6', price: '344$', image: '/images/flower6.png' },
];
function Filter() {
  const {filter} = useParams<{filter:string}>();
  const text= filter === 'all-products' ? 'Browse through our products and discover the perfect choice' : `Explore our selection of ${filter} to find the perfect match for your needs`;
  return (
    <>
      <SubPagesHeader text={text} />
      <div className={styles.products}>
        {products.map((product, index) =>
          <div key={index} className={styles.grid_item}>
            <Product key={index} product={product}/>
          </div>
        )}
      </div>
      <Testimonials />
    </>
  )
}

export default Filter
