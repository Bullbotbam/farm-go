import React from 'react';

import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// get nearest locations
function getLocations() {

    const userLocation = document.querySelector("#zip-input").value.trim();
    
    fetch(
        "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + userLocation,
    )
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {

        const ID = data.results[0].id
        const marketName = data.reults[0].marketname

        getLocationProducts(ID)
    })
    .catch(error => 
        console.log(error)
    );
};

// get nearest location's products
function getLocationProducts(ID) {
    fetch(
        "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + ID
    )
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        
        const marketAddress = data.marketDetails.Address
        const mapLink = data.marketDetails.GoogleLink
        const schedule = data.marketDetails.Schedule
        const products = data.marketDetails.Products

    })
    .catch(error => 
        console.log(error)
    );
};

function MarketSearch() {

  return (
    <>
    <div className='container my-1'>
    <p>testing market fetch</p>
    <div class="field has-addons">
        <div class="control is-expanded has-icons-left">
            <input class="input is-fullwidth" type="text" placeholder="Search by Zip" id="zip-input" />
            <p id="recipe-searches"></p>
            <span class="icon is-small is-left">
                <i class="fas fa-utensils"></i>
            </span>
        </div>                            
    </div>
    <button onClick={getLocations} class="button is-primary button is-danger is-light" id="search-btn">Search</button>
    </div>

</>
  );
}

export default MarketSearch;