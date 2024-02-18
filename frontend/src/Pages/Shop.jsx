import ShopCard from "../Components/ShopCard";
import UseGetAllData from "../CustomHooks/UseGetAllUserData"


const Shop = () => {
  const data=UseGetAllData();
  console.log(data)
  return (
    <div className="flex flex-wrap justify-center gap-20 p-11">
      {
        data && data.map((product)=>(
          <ShopCard key={product.id}  product={product} />
        ))
      }
    </div>
  )
}

export default Shop