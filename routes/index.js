var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'Leopoldo', title: 'soft-dev-test' });
});
router.get('/admin', function(req, res, next) {
  res.render('admin', { name: 'Leopoldo', title: 'soft-dev-test' });
});
router.get('/new_move', function(req, res, next) {
  res.render('new_move', { name: 'Leopoldo', title: 'soft-dev-test' });
});

module.exports = router;
