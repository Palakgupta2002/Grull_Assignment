import { useSelector } from "react-redux";
import ShopCard from "../Components/ShopCard";

const Cart = () => {
  const cart  = useSelector(store => store.cartItem.cart); // Assuming the Redux store has a slice named 'cart'
  console.log(cart,"hello cart ac")

  return (
    <div className="flex justify-center border-2 border-solid border-red-700">
      {
        cart && cart.map((product, index) => (
          <ShopCard key={index} product={product} />
          
        ))
      }
    </div>
  );
}

export default Cart;
