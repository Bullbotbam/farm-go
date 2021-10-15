import React from "react";

import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import useStyles from "../../utils/styles";

function Category(item) {
  const { image, title, _id, description } = item;

  const classes = useStyles();

  return (
    <>
      <Card className={classes.card} style={{ alignContent: "center" }}>
        <CardMedia
          className={classes.cardMedia}
          image={`/images/${image}`}
          title="Image title"
          alt={title}
        />

        <CardContent>
          <Typography gutterBottom variant="h5">
            <h4>{title}</h4>
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Category;
