import React from "react";
import "./style.css"

function Coupons() {
  const sales = [
    {
        
      src: require("../../assets/cupons/almond.png"),
    },
    {

      src: require("../../assets/cupons/apples.png"),
    },
    {

      src: require("../../assets/cupons/pears.png"),
    },
    {

      src: require("../../assets/cupons/peppers.png"),
    },
    {

      src: require("../../assets/cupons/pumpkins.png"),
    },
    {

      src: require("../../assets/cupons/salmon.png"),
    },
  ];
  return (
    <>
    <h2 style={{ alignText: "center"}}>Check out this weeks deals</h2>
      <div className="cards">
      {sales.map(({ src }) => (
          <ul className="projects" key={{ src}}>
            <img
              src={src}
              alt="coupons"
            ></img>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Coupons;
