import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";
import "./cartitem.css";

const Cart = (props) => {
  let count=0;
  const ctx = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      <li className="item">
        <h4 className="i">Name</h4>
        <h4 className="i">Quantity</h4>
        <h4 className="i a">Price</h4>
       <h4 className="i"></h4>
      </li>
      {ctx.items.map((item) => (
        <CartItem name={item.name} amount={item.amount} price={item.price} id={item._id} count={count++} />
      ))}
    </ul>
  );

  ctx.setTotalAmount(ctx.items.reduce((curprice, item) => {
    // console.log(item.amount);
    // console.log(item.price);
    return curprice + item.amount * item.price;
  }, 0))
  // const totalAmount = ctx.items.reduce((curprice, item) => {
  //   console.log(item.amount);
  //   console.log(item.price);
  //   return curprice + item.amount * item.price;
  // }, 0);

  return (
    <Modal onbackdrop={props.onRemoveModel}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs. {ctx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onRemoveModel}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
