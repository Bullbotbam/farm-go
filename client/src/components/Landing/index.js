import React from "react";
import { Container } from "@mui/material";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import { Grid } from "@mui/material";
import useStyles from "../../utils/styles";
import { Link } from "react-router-dom";

function Landing() {
  const classes = useStyles();
  const pictures = [
    {
      name: "View Our Products",
      src: require("../../assets/market1.jpg"),
      nav: "/products",
    },

    {
      name: "Checkout our weekly deals",
      src: require("../../assets/chili.jpg"),
      nav: "/sales",
    },

    {
      name: "Shop by category",
      src: require("../../assets/groceries/bread.jpg"),
      nav: "/category",
    },
  ];

  return (
    <>
      <Container style={{ justifyContent: "center", margin: "30px 30px" }}>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "3rem", justifyContent: "space-between" }}
        >
          {pictures.map(({ name, src, nav }) => (
            <Grid xs={12} sm={6} md={4}>
              <Card className={classes.card}  style={{width: "90%"}} key={{ name, src }}>
                
                <img
                  src={src}
                  alt={name}
                  style={{
                    width: "400px",
                    height: "260px",
                    alignItems: "center",
                  }}
                ></img>

                <CardContent>
                  <Link to={nav} style={{ textDecoration: "none" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {name}
                    </Typography>
                  </Link>
                  <Typography></Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Landing;
