import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

//Example ecommerce app, to share state
function App() {
  //share state and pass to the children as Props (Cart.tsx and NavBar.tsx) Here is where we mantain the state.
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
