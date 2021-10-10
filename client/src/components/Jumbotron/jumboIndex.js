import React from "react";
import "./style.css"

// const customStyles = {
//   content: {
//    color: "red",
//     // backgroundImage: `url(${photo})`,
//     // backgroundSize: "cover",
//   },
// };

function Jumbotron() {
    
  //   const images = [
  // {
  //   src: require("../../assets/groceries/cow.jpg"),
  // },
  //   {

  //     src: require("../../assets/groceries/tracktor.jpg"),
  //   },
  //   {

  //     src: require("../../assets/groceries/care.jpg"),
  //   },
  //   ];

  return (
    <div>
      <h2 className="header" >
        QUALITY PRODUCTS, LOCAL FLAVORS & FAMILIAR FACES
      </h2>
      <div className="cards">
        {/* {images.map(({ images }) => (
          <ul className="projects" key={{ images }}> */}
        {/* <img src={photo} alt="coupons"></img> */}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default Jumbotron;
