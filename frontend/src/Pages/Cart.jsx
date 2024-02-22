import { useSelector } from "react-redux";
import CardItem from "../Components/CardItem";
import { Button, Modal } from "flowbite-react";
import congratulation from "../assets/congratulation.png"
import reg from "../assets/regret.png"
import { useState } from "react";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const islogin = useSelector(store => store.userAuth);
  console.log(islogin,"hello")

  let total = 0;
  const cart = useSelector(store => store.cartItem.cart);

  console.log(cart, "hello cart ac");

  if (!cart || cart.length === 0) {
    return <div className="flex justify-center">
      <div > 
      <img src={reg} />
      <p className="text-2xl">Your cart is empty</p>
      </div>
    </div>;
  }

  return (
  <div >
     <div className="flex justify-center ">
      <div className="m-10">
        {cart.map((product, index) => (
          <CardItem key={index} product={product} />
        ))}
      </div>
    </div>
    <div className="flex justify-center gap-10">
{cart.map((product) => {
  total += product.price;
  return null; 
})}
<div className="text-2xl">Your total is Total: $ {total}</div>
<>
      <Button onClick={() => setOpenModal(true)}>Place order</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Order Confirmation</Modal.Header>
        <Modal.Body>
         {
          islogin ?
          <div className="flex justify-center">
            <div>
          <div className="text-2xl"><img src={congratulation} /></div>
          <div className="text-2xl">Your order is placed Succesfully</div>
          <div className="text-2xl">Your total is : $ {total}</div>
          </div>
          </div>
          :
          <div className="flex justify-center">
            <div>
            <img src={reg}/>
            <p>Pls login first</p>
          </div>
          </div>
         }
        </Modal.Body>
      </Modal>
    </>
</div>
  </div>
  );
};

export default Cart;

