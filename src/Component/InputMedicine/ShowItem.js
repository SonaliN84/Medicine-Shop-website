import React, {useState,useContext} from 'react';
import CartContext from '../../Store/cart-context';
import AvailableMedicineContext from '../../Store/available-medicine-context';
import './ShowItem.css';
import axios from 'axios'

const ShowItem=(props)=>{
    const [amount,setAmount]=useState(0)
    const [Modifyquantity,setModifyQuantity]=useState(props.quantity);
    const Medctx=useContext(AvailableMedicineContext)
    const ctx=useContext(CartContext);

    const InputHandler=(event)=>{
        
        setAmount(event.target.value)
     }
  const addItemHandler= (event)=>{
    event.preventDefault();
    console.log(props.name)
    console.log(amount)
    console.log(props.price)
    console.log("idcc",props.id)
    ctx.addItem({
        name:props.name,
        amount:amount,
        price:props.price,
       
        
    })

    // console.log("id",item.id)
axios.put(`https://crudcrud.com/api/59a6fea460aa426abb0bbba9fbeeecfa/ProductsMed/${props.id}`,{
    
        name:props.name,
        description:props.description,
        price:props.price,
        quantity:props.quantity-amount

    
}).then((response)=>{
    axios.get('https://crudcrud.com/api/59a6fea460aa426abb0bbba9fbeeecfa/ProductsMed')
    .then((response)=>{
        Medctx.setItems(response.data)
    })
})

    // console.log(ctx.items)
    // setModifyQuantity((prev)=>{
    //    return (prev-amount);
    // })
    // Medctx.items[props.count].quantity-=amount;
    
  }
  console.log(ctx.items)

    return(
        <li className={`quantity ${Medctx.items[props.count].quantity===0 ? 'none':''}`}>
        <div >{props.name}-{props.description}-{props.price}-{props.quantity}
         Amount<input type="text" onChange={InputHandler}/>
        <button onClick={addItemHandler}>Add to cart</button>
        
        </div>
        </li>
    )
}
export default ShowItem;