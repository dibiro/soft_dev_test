var express = require('express');
var router = express.Router();
var Move       = require('./../app/models/move');
var Theater       = require('./../app/models/theater');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'Leopoldo', title: 'soft-dev-test' });
});
router.get('/admin', function(req, res, next) {
  res.render('admin', { name: 'Leopoldo', title: 'Admin' });
});
router.get('/new_move', function(req, res, next) {
  res.render('new_move', { name: 'Leopoldo', title: 'New Move' });
});
router.get('/new_theater', function(req, res, next) {
  res.render('new_theater', { name: 'Leopoldo', title: 'New Theater' });
});
router.get('/move/:move_id', function(req, res, next) {
  Move.findById(req.params.move_id, function(err, move) {
      if (err)
          res.send(err);
      res.render('move', { name: 'Leopoldo', title: 'Move: '+move.name, move:move });
  });
});
router.get('/theater/:theater_id', function(req, res, next) {
  Theater.findById(req.params.theater_id).populate('moves').exec( function(err, theater) {
      if (err)
          res.send(err);
      Move.find(function(err, moves) {
          if (err)
              res.send(err);

          res.render('theater', { name: 'Leopoldo', title: 'Theater: '+theater.name, theater:theater, moves:moves });
      });
  });
});
router.get('/list_move', function(req, res, next) {
  Move.find(function(err, moves) {
      if (err)
          res.send(err);

      res.render('list_move', { name: 'Leopoldo', title: 'List Moves', moves:moves });
  });
});
router.get('/list_theater', function(req, res, next) {
  Theater.find(function(err, theaters) {
      if (err)
          res.send(err);

      res.render('list_theater', { name: 'Leopoldo', title: 'List Theaters', theaters:theaters });
  });
});

module.exports = router;
