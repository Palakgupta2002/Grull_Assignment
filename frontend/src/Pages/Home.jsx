import Crousel from "../Components/Crousel"
import DiscountOfferPage from "../Components/DiscountOfferPage"
import FeatureProduct from "../Components/FeatureProduct"
import ProductCollection from "../Components/ProductCollection"


const Home = () => {
  return (
    <div>
        <div className='carousel-container'>
        <Crousel />
        <ProductCollection/>
        <DiscountOfferPage/>
        <FeatureProduct/>
      </div>
    </div>
  )
}

export default Home