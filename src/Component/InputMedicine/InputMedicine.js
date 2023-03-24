import {useState,useContext} from 'react';
import AvailableMedicineContext from '../../Store/available-medicine-context';

const InputMedicine =()=>{
  const [name,setName]=useState('');
  const [description,setDescription]=useState('');
  const [price,setPrice]=useState('');
  const [quantity,setQuantity]=useState('');

  const ctx=useContext(AvailableMedicineContext)
  
  const NameHandler=(event)=>{
    setName(event.target.value);
  }

  const DescriptionHandler=(event)=>{
    setDescription(event.target.value);
  }

  const PriceHandler=(event)=>{
    setPrice(event.target.value);
  }

  const QuantityHandler=(event)=>{
    setQuantity(event.target.value);
  }

  const SubmitHandler =(event)=>{
   event.preventDefault();
    ctx.addItem({
        name:name,
        description:description,
        price:price,
        quantity:quantity

    })
    console.log("input",ctx.items)
  }




  return (
    <form onSubmit={SubmitHandler}>
        <label htmlFor="name">Medicine Name</label>
        <input type="text" id="name" onChange={NameHandler}/>

        <label htmlFor="description">Medicine description</label>
        <input type="text" id="description" onChange={DescriptionHandler}/>

        <label htmlFor="price">Medicine Price</label>
        <input type="text" id="price" onChange={PriceHandler}/>

        <label htmlFor="quantity">Medicine quantity</label>
        <input type="text" id="quantity" onChange={QuantityHandler}/>

        <button>Add Product</button>
    </form>
  );
}
export default InputMedicine;