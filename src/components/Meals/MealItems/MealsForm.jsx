import MealsFormInput from "../../UI/MealsForminput"

const MealsForm=function(){
    return(
    <form className="text-right">
    <MealsFormInput
    label="Amount"
    input={{
     id:"amount",
     type:"number",
     min:"1",
     max:"5",
     step:"1",
     defaultValue:"1"

    }}    
    />
   
    </form>

    )
}

export default MealsForm