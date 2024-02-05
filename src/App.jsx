import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Layout/MealsSummary";
import Meals from "./components/Meals/Meals";
import {  useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };
  const hideCarthandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider >
      {cartIsShown && <Cart onClose={hideCarthandler} />}
      <Header onShow={showCarthandler} />
      <MealsSummary />
      <Meals />
    </CartProvider>
  );
}

export default App;
