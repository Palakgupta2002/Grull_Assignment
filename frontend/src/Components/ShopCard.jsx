import { Button } from "flowbite-react"


const ShopCard = (product) => {
    console.log(product.product.image,"hello")
  return (
    <div>
        <div className="flex justify-center w-60 h-full ">
            <img width={"150px"} src={product.product.image} alt="" />
        </div>
        <div>

        </div>
        <div className="flex justify-between">
            <div><Button>Add to cart</Button></div>
            <div><Button>Like</Button></div>
        </div>
    </div>
  )
}

export default ShopCard