import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../utils/actions";
import { QUERY_CATEGORIES } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import cartegoryItem from "../components/CategoryItem";
// import { makeStyles } from '@mui/styles';

// import SearchBar from '../components/SearchBar';
// import Jumbotron from '../components/Jumbotron';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  // CardActions,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import CartegoryItem from "../components/CategoryItem";

const CategoryMenu = () => {
  const classes = useStyles();
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  // function filterCategories() {
  // 	if(!categorys) {
  // 		return state.categories
  // 	}

  // 	return state.categories.filter(
  // 		(catergory) => category.
  // 	)
  // }

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <>
      <CssBaseline />

      <maim>
        {/* <Container className={classes.cardGrid} maxWidth="xl">
          <Typography variant="h2">Categories</Typography>

          <Grid container spacing={2} style={{ marginTop: "3rem" }}>
            {categories.map((item) => (
              <Grid item key={item._id} xs={12} sm={6} md={4}>
                <Card
                  className={classes.card}
                  style={{ alignContent: "center" }}
                  onClick={() => window.open(item._id)}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.image}
                    title="Image title"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant="h5">
                    {item.title}
                    </Typography>

                    <Typography>hello</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> */}
        <div>
          {categories.map((item) => (
            <button
              key={item._id}
              onClick={() => {
                handleClick(item._id);
              }}
            ></button>
          ))}
        </div>
      </maim>
      <Container className={classes.cardGrid} maxWidth="xl">
        <h2>Choose a Category:</h2>
        <Grid container spacing={2} style={{ marginTop: "3rem" }}>
          {categories.map((items) => (
            <Grid xs={12} sm={6} md={4}>
              <CartegoryItem
                key={items._id}
                image={items.name}
                title={items.title}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

function ChooseCategory() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked");
  }
  return (
    <form onClick={handleClick}>
      <button type="submit">Submit</button>
    </form>
  );
}
export default CategoryMenu;
