import Cart from "./components/Cart/Cart"
import Header from "./components/Layout/Header"
import MealsSummary from "./components/Layout/MealsSummary"
import Meals from "./components/Meals/Meals"
import { Fragment,useState } from "react"

function App() {
  const[cartIsShown,setCartIsShown]=useState(false)
  
  const showCarthandler=()=>{
setCartIsShown(true)
  }
  const hideCarthandler=()=>{
setCartIsShown(false)
  }

  return (
<Fragment>
{cartIsShown && (<Cart onClose={hideCarthandler} />)}
<Header onShow={showCarthandler} />
<MealsSummary />
<Meals />




</Fragment>
   
  
  )
}

export default App
