import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Filter from './components/Filter/Filter'
import AboutUs from './components/AboutUs/AboutUs'
import ItemDetails from './components/ItemDetails/ItemDetails'
import Checkout from './components/Checkout/Checkout'
import NavFooterControl from './components/NavFooterControl'
import { useSmoothScroll } from './components/hooks/useSmoothScroll'
function App() {
  useSmoothScroll({
    lerp: 0.1,
    wheelMultiplier: 0.3,
    infinite: false,
    smoothWheel: true,
    smoothTouch: false,
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:filter" element={<Filter />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products/details" element={<ItemDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<div>Not Found</div>}/>
      </Routes>
      <NavFooterControl />
    </BrowserRouter>
  )
}

export default App
