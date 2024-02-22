import { Button, Card } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../utils/cartSlice'


const CardItem = ({product}) => {
    const dispatch = useDispatch()
    const handleRemove=(id)=>{
        dispatch(deleteCartItem(id))

    }
  return (
    <Card className="max-w-sm flex justify-center border-2 border-solid border-red-700 mt-10 p-10" imgSrc={product.image} horizontal>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {product.title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {product.description}
    </p>
    <p className='text-2xl'>$ {product.price}</p>
    <div>
        <Button onClick={()=>handleRemove(product.id)}>Remove</Button>
    </div>
  </Card>
  )
}

export default CardItem