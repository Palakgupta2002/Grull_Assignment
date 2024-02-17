import Crousel from "../Components/Crousel"
import ProductCollection from "../Components/ProductCollection"


const Home = () => {
  return (
    <div>
        <div className='carousel-container'>
        <Crousel />
        <ProductCollection/>
      </div>
    </div>
  )
}

export default Home