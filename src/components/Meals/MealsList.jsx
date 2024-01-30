import sushiImage from '../../assets/sushi.png'
import pizzaImage from '../../assets/pizza.png'
import burgerImage from '../../assets/burger.png'
import saladImage from '../../assets/salad.png'





const Mealitems = [
  {
    id: 1,
    name: "Sushi",
    description: "Finest fish and veggies",
    price: "₹600",
    imageSrc:sushiImage
  },
  {
    id: 2,
    name: "Corn Pizza",
    description: "A italian delight with corn !",
    price: "₹300",
    imageSrc:pizzaImage
  },
  {
    id: 3,
    name: "Barbecue Burger",
    description: "American,raw,meaty",
    price: "₹400",
    imageSrc:burgerImage
  },
  {
    id: 4,
    name: "Russian Salad",
    description: "Chicken,veggies,fruits",
    price: "₹500",
    imageSrc:saladImage
  },
];

 const MealList = function() {
  return (
    <div className="  mx-auto  max-w-4xl mt-44 mb-10 bg-white rounded-xl">
      <div className="overflow-hidden rounded-xl border border-gray-100 shadow">
       
          {/* Product List */}
          <div className="px-5 py-6 md:border-r md:border-r-gray-200 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">
                {Mealitems.map((items) => (
                  <li
                    key={items.id}
                    className="flex items-stretch justify-between space-x-5 py-7"
                  >
                    <div className="flex flex-1 items-stretch">
                      <div className="flex-shrink-0">
                        <img
                          className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                          src={items.imageSrc}
                          alt={items.imageSrc}
                        />
                      </div>

                      <div className="ml-5 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-lg font-bold text-gray-900">
                            {items.name}
                          </p>
                          <p className="mt-1.5 text-sm font-medium text-gray-600">
                            {items.description}
                          </p>
                        </div>
                        
                        <p className="text-left text-sm font-bold text-red-900">
                        {items.price}
                      </p>
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end justify-between">
                    <button
                    type="button"
                    className="mt-4 rounded-md bg-red-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Add To Cart
                  </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    
  );
};


export default MealList