import  './cartitem.css';
import {useState,useContext} from 'react';
import CartContext from '../../Store/cart-context';
import AvailableMedicineContext from '../../Store/available-medicine-context';
const CartItem =(props)=>{
 const ctx=useContext(CartContext);
 const Medctx=useContext(AvailableMedicineContext);
 const [modifyAmount,setModifyAmount]=useState(props.amount)   
 const a=props.price;
 
 const reduceAmountHandler=()=>{
    // event.preventDefault();
    
    setModifyAmount((prev)=>{
        return  (prev-1);
    })

    Medctx.items.forEach((i,index)=>{
        if(i.name===props.name){
        Medctx.items[index].quantity++;
        }
  })
//   Medctx.setItems((prev)=>{
//     return [...prev]
//   })
    
    ctx.items[props.count].amount--;
    console.log(ctx.items[props.count].amount)
    ctx.setTotalAmount((prev)=>{
        return (prev-props.price)
    })
    // console.log(props.amount)
    // console.log(props.id)
    // console.log(props.count)
//    console.log(document.getElementById(props.id))
 }
 const addAmountHandler=()=>{
    setModifyAmount((prev)=>{
        return  (Number.parseInt(prev)+1);
    })

    Medctx.items.forEach((i,index)=>{
        if(i.name===props.name){
        Medctx.items[index].quantity--;
        }
  })
    ctx.items[props.count].amount++;
  
    ctx.setTotalAmount((prev)=>{
        return (prev+props.price)
    })
 }
  return (
    <li className={`item ${modifyAmount===0 ? 'delete':''}`} id={props.id}>
    
   <div className='i'> {props.name}</div>
   <div className='i a'> {modifyAmount}</div>
   <div className='i'>Rs. {props.price}</div>
   <div>
   <button className='reduce' onClick={reduceAmountHandler}>-</button>
   <button className='add' onClick={addAmountHandler}>+</button>
   </div>
    </li>
  )
}
export default CartItem;