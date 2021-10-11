import React from "react";
import "./style.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Coupons() {
  const sales = [
    {
    name: "Milk",
    sale: "SALE 30 oz $6.00",
    price: "Regular 30 oz $8.75",
    offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/milk.jpg"),
    },
    {
        name: "Civni Apples",
        sale: "SALE 4 for $5.00",
        price: "Regular 3 for $5.00",
        offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/apples.jpg"),
    },
    {
        name: "Bosc pears",
        sale: "SALE  2 for $2.00",
        price: "Regular 2 for $3.75",
        offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/pears.jpg"),
    },
    {
        name: "Chinook Salmon",
        sale: "SALE $17.00",
        price: "Regular $29.99",
        offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/salmon.jpg"),
    },
    {
        name: "Broccoli",
        sale: "SALE $17.00",
        price: "Regular $29.99",
        offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/broccoli.jpg"),
    },
    {
        name: "Coffee beans",
        sale: "SALE $17.00",
        price: "Regular $29.99",
        offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/coffee.jpg"),
    },
    {
        name: "Onions",
        sale: "SALE $17.00",
        price: "Regular $29.99",
        offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/onions.jpg"),
    },
    {
        name: "Grapes",
        sale: "SALE $17.00",
        price: "Regular $29.99",
        offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/grapes.jpg"),
    },
    {
        name: "steak",
        sale: "SALE $17.00",
        price: "Regular $29.99",
        offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/steak.jpg"),
    },
    {
        name: "Cheese",
        sale: "SALE $17.00",
        price: "Regular $29.99",
        offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/cheese.jpg"),
    },
    {
        name: "Melon",
        sale: "SALE $17.00",
        price: "Regular $29.99",
        offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/melon.jpg"),
    },
  

  ];
  return (
    <>

<h2 className="deals" style={{ alignText: "center"}}>Check out this weeks deals</h2>
<Card sx={{ maxWidth: 345 }}>
      {sales.map(({ name, sale, price, offer, src }) => (  
      <CardActionArea key={{ name, sale, price, offer, src}}>
        
        <CardMedia
          component="img"
          height="140"
          image={src}
          alt="green iguana"
        />
        <CardContent className="dealInfo">
          <Typography gutterBottom variant="h5" component="div" className="couponName">
          {name}
          </Typography>
          <Typography className="sale" variant="body2" color="text.secondary">
           {sale}
           <p className="regularPrice">{price}</p>
            <p className="offerTime">{offer}</p>
          </Typography>
        
        </CardContent>
      </CardActionArea>
            ))}
    </Card>
    </>
  );
}



export default Coupons;
