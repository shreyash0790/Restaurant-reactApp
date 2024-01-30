import mealsImage from "../../assets/foodimg.jpg";
import { Fragment } from "react";
import HeaderCart from "../Cart/HeaderCart";


const Header = function () {
  return (
    <Fragment>
      <div className="relative w-full h-30 bg-red-950 ">
        <div className="mx-auto flex w-full h-30 items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="80"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#633333"
                  d="M25,18.4c11,0,20-2.4,20-5.4c0-1.1-1.2-2.1-3.2-2.9c0.8,0.5,1.2,1.1,1.2,1.7c0,2.6-8.1,4.7-18,4.7 S7,14.3,7,11.7c0-0.6,0.4-1.2,1.2-1.7c-2,0.8-3.2,1.9-3.2,2.9C5,15.9,14,18.4,25,18.4z"
                ></path>
                <path
                  fill="#633333"
                  d="M25 21c-8.8 0-16.3-1.6-19.9-4H5c0 2.3.8 4.7 1.9 7.1C1 28.2 2.1 39 12 37c.5-.1.5-.5 0-.6-3.9-.5-7.9-5.3-4.1-10.3 2.3 4.4 5.5 8.8 7.2 12.9l0 0c.7 1.7 4.8 3 9.9 3s9.2-1.3 9.9-3l0 0c3-7 10.1-15 10.1-22h-.1C41.3 19.4 33.8 21 25 21zM18 9c0 0-4.9-.4-4.9 2.2 0 1.1.8 2.6 4.2 2.6 3 0 6.8-3.7 11.9-3.7 3.7 0 3.7 2.5.7 2.5-2 0-3-.8-3-.8-.6-.4-1.3.4-1 1.1 0 0 0 1.1 4 1.1s4.6-1.9 4.5-2.6C34.3 10 33 8.7 30.9 8.3c-1.9-.3-4-.5-7 .6S18.8 12 16.8 12s-3.6-2.3 1.2-2C20.3 10.2 19 9 18 9z"
                ></path>
              </svg>
            </span>
            <span className=" text-white text-4xl px-5 font-extrabold ">
              HotMeals
            </span>
          </div>
          <HeaderCart />
        </div>
      </div>
      <div className="relative overflow-hidden h-72 bg-opacity-10 ">
        <img src={mealsImage} alt="Main Image" className="w-full opacity-80" />
      </div>
    </Fragment>
  );
};

export default Header;
