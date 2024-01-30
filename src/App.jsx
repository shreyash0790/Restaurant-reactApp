import Header from "./components/Layout/Header"
import MealsSummary from "./components/Layout/MealsSummary"
import Meals from "./components/Meals/Meals"
import { Fragment } from "react"

function App() {
  

  return (
<Fragment>
<div className="realtive">
<Header />
<MealsSummary />
<Meals />
</div>


</Fragment>
   
  
  )
}

export default App
