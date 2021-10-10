import React from "react";
import SingUp from "./components/SingUp";
import Cart from "./pages/Cart";
import MapSearch from "./components/MapSearch";
import Coupons from "./components/Coupons/couponsIndex";
import Jumbotron from "./components/Jumbotron/jumboIndex";
// import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <div>
   
      <SingUp />
         <Jumbotron />
      <Cart />
      <Coupons />
      <MapSearch />
    </div>
  );
}
export default App;
