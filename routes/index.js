var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === 'well_you_know_who_it_is') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
})

module.exports = router;
