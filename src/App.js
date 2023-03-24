import Header from './Component/Header/Header'

import InputMedicine from "./Component/InputMedicine/InputMedicine";
import ShowAvailableMedicine from "./Component/InputMedicine/ShowAvailableMedicines";
import Cart from './Component/Cart/Cart'
import { useState,useEffect,useContext } from 'react';
import AvailableMedicineContext from './Store/available-medicine-context';
import CartContext from './Store/cart-context';
import axios from 'axios';
function App() {
  const Medctx=useContext(AvailableMedicineContext)
  const CartCtx=useContext(CartContext)
  const [isModal, setIsModal] = useState(false);
  const ModalHandler = () => {
    setIsModal(true);
  };
  const removeModalHandler = () => {
    setIsModal(false);
  };

 useEffect(()=>{
  axios.get('https://crudcrud.com/api/59a6fea460aa426abb0bbba9fbeeecfa/cartMed')
  .then((response)=>{
    console.log(response.data)
   CartCtx.setItems(response.data)
  })
  // axios.get('https://crudcrud.com/api/24496ca9b73344cd9b8952b2ee7c3249/Products')
  // .then((response)=>{
  //   console.log(response.data)

  //  AvlMedctx.setItems(response.data)

  // })
  axios.get('https://crudcrud.com/api/59a6fea460aa426abb0bbba9fbeeecfa/ProductsMed')
    .then((response)=>{
        Medctx.setItems(response.data)

    })
 },[])
  return (
    <div>
    {isModal && <Cart onRemoveModel={removeModalHandler} />}
    <div>
    <Header onClickModal={ModalHandler}/>
    <InputMedicine/>
  <ShowAvailableMedicine/>
    </div>
    </div>
  );
}

export default App;
