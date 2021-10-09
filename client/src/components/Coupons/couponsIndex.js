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
      <div className="cards">
      {sales.map(({ src }) => (
          <ul className="projects" key={{ src}}>
            <img
              src={src}
              alt="hello"
            ></img>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Coupons;
