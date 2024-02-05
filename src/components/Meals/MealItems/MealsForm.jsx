import { useContext } from "react"
import MealsFormInput from "../../UI/MealsForminput"
import CartContext from "../../../store/CartContext"

const MealsForm=function(props){
const cartCnxt=useContext(CartContext)
const addItemToCart=(event)=>{
event.preventDefault();
const quantity=document.getElementById("amount_" +props.id).value
cartCnxt.addItems({...props.items,Quantity:quantity})
}



    return(
    <form className="text-right">
    <MealsFormInput
    label="Amount"
    input={{
     id:"amount_" +props.id,
     type:"number",
     min:"1",
     max:"5",
     step:"1",
     defaultValue:"1"

    }}    
    />
    <button
    type="button"
    className="mt-4 rounded-lg bg-red-900 px-4 py-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    onClick={addItemToCart}
  >
    + Add
  </button>
    </form>

    )
}

export default MealsForm