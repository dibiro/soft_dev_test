var express = require('express');
var router = express.Router();
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/videoclubdb');

var Move       = require('./../app/models/move');


router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


router.route('/')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var move = new Move();      // create a new instance of the Move model
        move.name = req.body.name;  // set the moves name (comes from the request)
        move.language = req.body.language;  // set the moves name (comes from the request)
        move.release_date = new Date(req.body.release_date);  // set the moves name (comes from the request)

        // save the move and check for errors
        move.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'move created!' });
        });

    })
    .get(function(req, res) {
        Move.find(function(err, moves) {
            if (err)
                res.send(err);

            res.json(moves);
        });
    });
router.route('/:move_id')

    .get(function(req, res) {
        Move.findById(req.params.move_id, function(err, move) {
            if (err)
                res.send(err);
            res.json(move);
        });
    })
    .put(function(req, res) {

        Move.findById(req.params.move_id, function(err, move) {

            if (err)
                res.send(err);

            move.name = req.body.name;  // set the moves name (comes from the request)
            move.language = req.body.language;  // set the moves name (comes from the request)
            move.release_date = new Date(req.body.release_date);  // set the moves name (comes from the request)

            move.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    });

module.exports = router;