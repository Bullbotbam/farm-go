import * as React from "react";
import "./style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

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
      sale: "SALE $1.50",
      price: "Regular $3.99",
      offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/broccoli.jpg"),
    },
    {
      name: "Coffee beans",
      sale: "SALE $7.00",
      price: "Regular $4.99",
      offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/coffee.jpg"),
    },
    {
      name: "Onions",
      sale: "SALE 4 for $5.00",
      price: "Regular 4 for $7.99",
      offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/onions.jpg"),
    },
    {
      name: "Grapes",
      sale: "SALE $3.00",
      price: "Regular $6.99",
      offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/grapes.jpg"),
    },
    {
      name: "steak",
      sale: "SALE $15.00",
      price: "Regular $22.99",
      offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/steak.jpg"),
    },
    {
      name: "Cheese",
      sale: "SALE $5.00",
      price: "Regular $8.99",
      offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/cheese.jpg"),
    },
    {
      name: "Melon",
      sale: "SALE $2.00",
      price: "Regular $3.99",
      offer: "Valid 10/08- 10/15",
      src: require("../../assets/cupons/melon.jpg"),
    },
  ];
  return (
    <>
      <main>
        <Container maxWidth="xl">
          <Typography variant="h2">Categories</Typography>

          <Grid container spacing={2} style={{ marginTop: "3rem" }}>
            {sales.map(({ name, sale, price, offer, src }) => (
              <Grid
                item
                key={{ name, sale, price, offer, src }}
                xs={12}
                sm={6}
                md={4}
              >
                <Card className="box" style={{ alignContent: "center"}}>
                  <CardMedia
                    component="img"
                    height="400"
                    objectFit="cover" 
                    image={src}
                    alt="sales"
                  />
                  <CardContent className="dealInfo">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="couponName"
                    >
                      {name}
                    </Typography>
                    <Typography className="sale" variant="body2" color="red">
                      {sale}
                    </Typography>
                    <p className="regularPrice">{price}</p>
                    <p className="offerTime" style={{ fontSize: "13px"}}>{offer}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Coupons;
