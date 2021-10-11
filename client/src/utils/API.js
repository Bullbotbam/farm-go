
 
const api_url =
	'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=30.267153&lng=-97.743057';

export const findFarmersMarket = () => {
	return fetch(api_url).then(response);
};

// export const searchFoodDatabase = (query) => {
// 	return fetch(
// 		'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=' + id
// 	);
// };

// function getResults(zip) {
// 	// or
// 	// function getResults(lat, lng) {
// 	$.ajax({
// 		type: 'GET',
// 		contentType: 'application/json; charset=utf-8',
// 		// submit a get request to the restful service zipSearch or locSearch.
// 		url:
// 			'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=' +
// 			zip,
// 		// or
// 		// url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=" + lat + "&lng=" + lng,
// 		dataType: 'jsonp',
// 		jsonpCallback: 'searchResultsHandler',
// 	});
// }
// //iterate through the JSON result object.
// function searchResultsHandler(searchResults) {
// 	for (var key in searchresults) {
// 		alert(key);
// 		var results = searchresults[key];
// 		for (var i = 0; i < results.length; i++) {
// 			var result = results[i];
// 			for (var key in result) {
// 				//only do an alert on the first search result
// 				if (i == 0) {
// 					alert(result[key]);
// 				}
// 			}
// 		}
// 	}
// }
