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
    <div>
        <div className="flex justify-center w-60 h-full ">
            <img width={"150px"} src={product.product.image} alt="" />
        </div>
        <div>

        </div>
        <div className="flex justify-between">
            <div><Button onClick={()=>handleClick(product.product)}>Add to cart</Button></div>
            <div><Button>Like</Button></div>
        </div>
    </div>
  )
}

export default ShopCard