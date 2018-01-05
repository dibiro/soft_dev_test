var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'Leopoldo', title: 'soft-dev-test' });
});

module.exports = router;
