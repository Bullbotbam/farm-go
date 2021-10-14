import React, { useState } from 'react';

import { findNearestMarkets } from '../utils/API';

import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";


function MarketSearch() {

  // create state for holding returned market locations
  const [searchedLocations, setSearchedLocations] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

   // create method to search for books and set state on form submit
   const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await findNearestMarkets(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const marketData = items.map((market) => ({
        marketName: market.results.marketname
      }));

      searchedLocations(marketData);
      setSearchedLocations('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <form
        onSubmit={handleFormSubmit}
        className="loginRoot"
        style={{
          border: "solid",
          borderWidth: "1px 1px",
          maxWidth: "50%",
          margin: "0 auto",
          background: "white",
        }}
      >
        <h2
          style={{
            display: "block",
            color: "white",
            background: "green",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Find a Local Market
        </h2>
        <TextField
          type="zip"
          label="Find by ZIP"
          name="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          variant="outlined"
          style={{ margin: "5%", display: "grid" }}
        />

        <Stack direction="row">
          <Button
            color="success"
            type="submit"
            style={{ margin: "5%", alignSelf: "center", display: "grid" }}
          >
            Find
          </Button>
        </Stack>
      </form>

      {searchedLocations.map((market) => {
          return (
              <p>{market.marketName}</p>
          )
      })}

</>
  );
}

export default MarketSearch;