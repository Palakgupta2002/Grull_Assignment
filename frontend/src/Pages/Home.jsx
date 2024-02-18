
import DiscountOfferPage from "../Components/DiscountOfferPage"
import FeatureProduct from "../Components/FeatureProduct"
import HomeCardDelivery from "../Components/HomeCardDelivery"
import ProductCollection from "../Components/ProductCollection"


const Home = () => {
  return (
    <div>
      <ProductCollection/>
      <DiscountOfferPage/>
      <FeatureProduct/>
      <HomeCardDelivery/> 
    </div>
  )
}

export default Home