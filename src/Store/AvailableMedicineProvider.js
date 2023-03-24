import AvailableMedicineContext from "./available-medicine-context";
import {useState} from 'react';
import axios from "axios";
const AvailableMedicineProvider=(props)=>{
    
    const [items,setItems]=useState([])
   
    
    
    const addItemToMedicineHandler=(item)=>{
    //     let flag=true;
    //     items.forEach((i,index)=>{
    //    if( i.name==item.name)
    //    {
    //     items[index].quantity=Number.parseInt(items[index].quantity)
    //     items[index].quantity+=Number.parseInt(item.quantity);
    //     setItems((prev)=>{
    //        return [...prev]
    //     })
    //        console.log(typeof(items[index].amount))
    //        console.log(item.amount)
           
           
    //        flag=false;
    //    }

    // })
    // if(flag){
    // setItems((prev)=>{
    //     return [...prev,item];
    // })

   axios.post('https://crudcrud.com/api/59a6fea460aa426abb0bbba9fbeeecfa/ProductsMed',item)
   .then((response)=>{
    axios.get('https://crudcrud.com/api/59a6fea460aa426abb0bbba9fbeeecfa/ProductsMed')
    .then((response)=>{
        setItems(response.data)
        

    })
    })
   

}
    
    

    const medicineContext={
        items:items,
        addItem:addItemToMedicineHandler,
        setItems:setItems
    }

   return (
    <AvailableMedicineContext.Provider value={medicineContext}>
    {props.children}
</AvailableMedicineContext.Provider>

   );
}
export default AvailableMedicineProvider;