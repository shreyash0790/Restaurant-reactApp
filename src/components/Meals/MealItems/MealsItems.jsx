
import MealsForm from "./Mealsform";
const Mealitems = function (props) {
  return (
    <div>
      <li
       
        className="flex items-stretch justify-between space-x-5 py-7"
      >
        <div className="flex flex-1 items-stretch">
          <div className="flex-shrink-0">
            <img
              className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
              src={props.imageSrc}
              alt={props.imageSrc}
            />
          </div>

          <div className="ml-5 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-lg font-bold text-gray-900">{props.name}</p>
              <p className="mt-1.5 text-sm font-medium text-gray-600">
                {props.description}
              </p>
            </div>

            <p className="text-left text-sm font-bold text-red-900">
              {props.price}
            </p>
          </div>
        </div>
        <div className="ml-auto flex flex-col items-end justify-between">
         <MealsForm items={props} id={props.id}/>
        
        </div>
      </li>
    </div>
  );
};

export default Mealitems;
