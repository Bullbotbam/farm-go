import React from "react";
import SingUp from "./components/SingUp";
import Cart from "./components/Cart";
import MapSearch from "./components/MapSearch";
// import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <div>
      <SingUp />
      <Cart />
      <MapSearch />
    </div>
  );
}
export default App;
