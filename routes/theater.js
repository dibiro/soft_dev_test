var express = require('express');
var router = express.Router();
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/videoclubdb');

var Theater       = require('./../app/models/theater');


router.route('/add_move/:theater_id')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        Theater.findById(req.params.theater_id).populate('moves').exec( function(err, theater) {

            if (err)
                res.send(err);
            theater.moves.push(req.body.move_id);

            // save the move and check for errors
            theater.save(function(err) {
                if (err)
                    res.send(err);
                res.redirect('/admin_theater/' + req.params.theater_id);
            });

        });

    });

router.route('/remove_move/:theater_id')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        Theater.findById(req.params.theater_id).populate('moves').exec( function(err, theater) {

            if (err)
                res.send(err);
            theater.moves.remove(req.body.move_id);

            // save the move and check for errors
            theater.save(function(err) {
                if (err)
                    res.send(err);
                res.redirect('/admin_theater/' + req.params.theater_id);
            });

        });

    });

router.route('/')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var theater = new Theater();      // create a new instance of the theater model
        theater.name = req.body.name;  // set the theaters name (comes from the request)
        theater.address = req.body.address;  // set the theaters name (comes from the request)

        // save the move and check for errors
        theater.save(function(err) {
            if (err)
                res.send(err);
            res.redirect('/admin_theater/' + theater.id);
        });

    })
    .get(function(req, res) {
        Theater.find().populate('moves').exec(function(err, theaters) {
            if (err)
                res.send(err);

            res.json(theaters);
        });
    });
router.route('/:theater_id')

    .get(function(req, res) {
        Theater.findById(req.params.theater_id).populate('moves').exec( function(err, theater) {
            if (err)
                res.send(err);
            res.json(theater);
        });
    })
    .put(function(req, res) {

        Theater.findById(req.params.theater_id, function(err, theater) {

            if (err)
                res.send(err);

            theater.name = req.body.name;  // set the theaters name (comes from the request)
            theater.address = req.body.address;  // set the theaters name (comes from the request)

            // save the move and check for errors
            theater.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'theater updated!' });
            });

        });
    });

module.exports = router;