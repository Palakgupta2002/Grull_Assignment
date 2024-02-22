import { Button } from "flowbite-react"
import { useDispatch } from "react-redux"
import { addToCart } from "../utils/cartSlice"


const ShopCard = (product) => {
    console.log(product.product.image,"hello")
   const dispatch = useDispatch()
    const handleClick=(product)=>{
      dispatch(addToCart(product));

    }
  return (
    <div className="mt-10 mb-10">
        <div className="flex justify-center w-60 h-full card p-10">
            <img width={"150px"} src={product.product.image} alt="" />
            <div className="text-xl">${product.product.price}</div>
        </div>
        <div>
        </div>
        <div className="flex justify-between card p-5 bg-blue-200">
            <div className="rounded-3xl"><Button  outline  onClick={()=>handleClick(product.product)}>Add to cart</Button></div>
            <div><Button outline >Like</Button></div>
        </div>
    </div>
  )
}

export default ShopCard