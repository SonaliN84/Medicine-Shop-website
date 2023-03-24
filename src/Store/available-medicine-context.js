import React from 'react';

const AvailableMedicineContext=React.createContext({
    items:[],
    addItem:(item)=>{},
    setItems:()=>{}
})
export default AvailableMedicineContext;