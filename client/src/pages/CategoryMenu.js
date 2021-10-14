import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../utils/actions";
import { QUERY_CATEGORIES } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import Category from "../components/Category";

// import SearchBar from '../components/SearchBar';
// import Jumbotron from '../components/Jumbotron';
import { CssBaseline, Grid, Container } from "@material-ui/core";
import useStyles from "../utils/styles";

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

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <>
      <CssBaseline />

      <Container className={classes.cardGrid} maxWidth="xl">
        <h2>Choose a Category:</h2>
        <Grid container spacing={2} style={{ marginTop: "3rem" }}>
          {categories.map((item) => (
            <Grid xs={12} sm={6} md={4} >
              <Category
                key={item._id}
				onClick={() => {
					handleClick(item._id);
				  }}
                _id={item._id}
                image={item.image}
                title={item.title}
				
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
