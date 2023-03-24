import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
  return(
   <div>
    <h1>Medicine Store</h1>
    <HeaderCartButton Modal={props.onClickModal}/>
   </div>
  );
}
export default Header;