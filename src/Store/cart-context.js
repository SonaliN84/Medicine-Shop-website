import React from 'react';

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    setTotalAmount:()=>{},
    setItems:()=>{}
})
export default CartContext;