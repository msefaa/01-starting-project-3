import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [showMoodal, setshowMoodal] = useState(false);

  const showModalHandler = () => {
    setshowMoodal(true);
  };
  const hideModalHandler = () => {
    setshowMoodal(false);
  };
  return (
    <CartProvider>
      {showMoodal && <Cart onHideModal={hideModalHandler} />}
      <Header onShowModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
