var express = require('express');
var router = express.Router(); //this is used to manipulate data regardless of the underlying data store


router.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === '<validation_token>') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
})

/* Index endpoint for API */
router.get('/', function(req, res, next) {
  res.send("Here's the API endpoint which requires authentication of some sort, since it is the entry point for data into the system");
});

/* Endpoint for saving a store entry. The payload is expected to contain the required fields which define a store entry

*/
router.post('/store', function(req, res, next) {
  res.writeHead(404); //we've not done this part yet 
  res.send('Failed');
});

/* Endpoint for saving a schedule entry. The payload is expected to contain the required fields whcih define a schedule entry

*/
router.post('/schedule', function(req, res, next) {
  res.writeHead(404); //we've not done this part yet 
  res.send('Failed');
});

/* Endpoint for getting a store entry. It returns the related schedules for the given store. 
Filters can be applied to limit the results to certain locations or a given number of stores


/store/:store_name?location_city=&location_state=&location_country=&limit=
*/
router.get('/store/:store_name', function(req, res, next) {
  res.writeHead(404); //we've not done this part yet 
  res.send('Failed');
});

/* Endpoint for fetching which stores of a particular type are open in a given location. 
 /category/:category_name. Payload contains info about the location around which stores of that category should be found
*/
router.get('/category/:category_name', function(req, res, next) {
  res.writeHead(404); //we've not done this part yet 
  res.send('Failed');
});
module.exports = router;
