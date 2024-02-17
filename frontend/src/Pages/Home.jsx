import Crousel from "../Components/Crousel"
import FeatureProduct from "../Components/FeatureProduct"
import ProductCollection from "../Components/ProductCollection"


const Home = () => {
  return (
    <div>
        <div className='carousel-container'>
        <Crousel />
        <ProductCollection/>
        <FeatureProduct/>
      </div>
    </div>
  )
}

export default Home