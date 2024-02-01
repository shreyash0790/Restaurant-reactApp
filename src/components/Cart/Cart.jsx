import Modal from "../UI/Modal";
import sushiImage from "../../assets/sushi.png";

const mealsItems = [
  {
    id: 1,
    name: "Sushi",
    price: "₹600",
    originalPrice: "₹1200",
    imageSrc: sushiImage,
    quantity: 1,
  },
];

const Cart = () => {
  return (
    <Modal>
      <ul className="flex flex-col divide-y divide-gray-200">
        {mealsItems.map((items) => (
          <li
            key={items.id}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-10 w-10 flex-shrink-0 rounded-md  outline-none dark:border-black sm:h-20 sm:w-20"
                src={items.imageSrc}
                alt={items.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-black leading-snug sm:pr-8">
                      {items.name}
                    </h3>
                    <p className="text-sm text-black">x{items.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-black ">
                      {items.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="space-y-1 text-right text-black pb-5">
        <p>
          Total amount:
          <span className="font-semibold"> ₹1200</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="rounded-full border border-orange-900 px-5 py-1 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </button>
        <button
          type="button"
          className="rounded-full border bg-orange-900 px-5 py-1 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Order
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
