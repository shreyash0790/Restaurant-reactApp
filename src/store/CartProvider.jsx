import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
const [items, updatedItems]=useState([])


const addItemsHandler = (item) => {
updatedItems((prevItem)=>[...prevItem,item])

  };
  const removeItemsHandler = () => {


  };

  const cartItems = {
    items:items,
    addItems: addItemsHandler,
    removeItems: removeItemsHandler,
  };

  return (
    
    <CartContext.Provider value={cartItems}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
