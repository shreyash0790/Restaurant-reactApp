import sum from "../../assets/sum.svg";

const MealsSummary = function () {
  return (
    <div className="  absolute  my-20 top-40  ml-20 flex flex-col  items-center text-white text-center ">
      <div className="  shadow-black shadow-lg  p-5 bg-black bg-opacity-70 rounded-lg w-1/2">
        <div className="relative w-20 mx-auto mb-1 -mt-5">
          <img className="-mt-5" src={sum} alt="cookie" />
        </div>
        <span className=" shadow-sm shadow-white font-bold text-white  text-2xl rounded-lg ">
          Eat , Sleep ,  Repeat
        </span>
        <p className="  font-semibold left-30  right-30 leading-normal text-white  text-lg">
          Discover a world of culinary delights right at your fingertips. From
          exploring diverse cuisines to making reservations and ordering
          takeout, Foodie Delight is your go-to companion for all things
          food-related
        </p>
      </div>
    </div>
  );
};

export default MealsSummary;
