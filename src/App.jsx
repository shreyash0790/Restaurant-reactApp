import Header from "./components/Layout/Header"
import Summary from "./components/Layout/AppSummary"
import MealList from "./components/Meals/MealsList"
import { Fragment } from "react"

function App() {
  

  return (
<Fragment>
<div className="realtive">
<Header />
<Summary />
<MealList />
</div>


</Fragment>
   
  
  )
}

export default App
