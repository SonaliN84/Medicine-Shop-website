import {  useState,useContext } from "react";
// import Modal from './Modal';
// import Backdrop from './Backdrop';

import CartContext from "../../Store/cart-context";
const HeaderCartButton=(props)=>{

    const cartCtx=useContext(CartContext);

    const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
        return curNumber+Number.parseInt(item.amount);
    },0)
  
// const [ifClicked,setIfClicked]=useState(false);
// const modalHandler=()=>{
//     setIfClicked(true)
// }
 const modalHandler=()=>{
    props.Modal();
 }
  return (
    <div>
    {/* {ifClicked && <Backdrop/>}
    {ifClicked && <Modal/>} */}
<div>
    {/* <button className={classes.button} onClick={modalHandler}> */}
    <button  onClick={modalHandler}>
        
        <span>
            Your Cart
        </span>
        <span>
        {numberOfCartItems}
        </span>
    </button>
    </div>
    </div>
  )
}
export default HeaderCartButton;