import React from "react";
// import photo from "../../assets/cupons/almond.png"

function Coupons() {
  const sales = [
    {
      src: require("../../assets/cupons/almond.png").default,
    },
    {

      src: require("../../assets/cupons/apples.png").default,
    },
    {

      src: require("../../assets/cupons/pears.png").default,
    },
    {

      src: require("../../assets/cupons/peppers.png").default,
    },
    {

      src: require("../../assets/cupons/pumpkins.png").default,
    },
    {

      src: require("../../assets/cupons/salmon.png").default,
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
              style={{ width: "400px", height: "250px" }}
            ></img>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Coupons;
