import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
} from "@material-ui/core";
import useStyles from "../../utils/styles";


function CartegoryItem(items) {
  const classes = useStyles();
  const { image, title, _id } = items;

  return (
  <>

    <CssBaseline />
    <Card className={classes.card} style={{ alignContent: "center" }}>
      {/* <Link to={`/products/${_id}`}> */}
        <CardMedia
          className={classes.cardMedia}
          image={`/images/${image}`}
          title="Image title"
          alt={title}
        />
      {/* </Link> */}
      <CardContent>
        <Typography gutterBottom variant="h5">
          <h4>{title}</h4>
        </Typography>
      </CardContent>

    </Card>
  </>
  )
}
export default CartegoryItem;
