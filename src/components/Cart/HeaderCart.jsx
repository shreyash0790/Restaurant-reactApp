const HeaderCart=function(){
return (
    <button
    type="button"
    className=" cursor-pointer font-inherit border-none bg-gray-900 bg-opacity-30 text-white px-12 py-3 flex justify-around items-center rounded-full font-bold text-lg transition-all duration-300 ease-in-out hover:bg-primary active:bg-secondary"
  >
  <svg
  xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 20 20'
  width="50"
  height="40"
  fill='currentColor'
  className="mr-2"
 
>
  <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
</svg> 
<span className="text-xl">Your Cart</span>
<span className=" text-white bg-orange-600 px-4 py-1 rounded-full ml-4 font-bold">3</span>
  </button>
      

)

}


export default HeaderCart