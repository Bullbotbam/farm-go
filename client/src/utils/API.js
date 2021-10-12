
 
const api_url =
	'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=30.267153&lng=-97.743057';

export const findFarmersMarket = () => {
	return fetch(api_url).then(response);
};

// get nearest location 
function fetchLogic() {

    const userLocation = document.querySelector("#zip-input").value.trim();
    
    fetch(
        "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + userLocation,
    )
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {

        console.log(data)
        const ID = data.results[0].id

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
        console.log(data)   
    })
    .catch(error => 
        console.log(error)
    );
};