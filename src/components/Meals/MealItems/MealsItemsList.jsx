import sushiImage from "../../../assets/sushi.png";
import pizzaImage from "../../../assets/pizza.png";
import burgerImage from "../../../assets/burger.png";
import saladImage from "../../../assets/salad.png";
import Mealitems from "./MealsItems";

const availabeMeals = [
  {
    id: 1,
    name: "Sushi",
    description: "Finest fish and veggies",
    price: "₹600",
    imageSrc: sushiImage,
  },
  {
    id: 2,
    name: "Corn Pizza",
    description: "A italian delight with corn !",
    price: "₹300",
    imageSrc: pizzaImage,
  },
  {
    id: 3,
    name: "Barbecue Burger",
    description: "American,raw,meaty",
    price: "₹400",
    imageSrc: burgerImage,
  },
  {
    id: 4,
    name: "Russian Salad",
    description: "Chicken,veggies,fruits",
    price: "₹500",
    imageSrc: saladImage,
  },
];

const MealItemsList = function () {
  return (
    <div className="  mx-auto  max-w-4xl mt-44 mb-10 bg-white rounded-xl">
      <div className="overflow-hidden rounded-xl border border-gray-100 shadow">
        <div className="px-5 py-6 md:border-r md:border-r-gray-200 md:px-8">
          <div className="flow-root">
            <ul className="-my-7 divide-y divide-gray-200">
              {availabeMeals.map((items) => (
                <Mealitems
                  key={items.id}
                  id={items.id}
                  name={items.name}
                  imageSrc={items.imageSrc}
                  description={items.description}
                  price={items.price}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealItemsList;
