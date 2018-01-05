// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

// SASS
// =============================================================================
var srcPath = __dirname + '/sass';
var destPath = __dirname + '/public/styles';

var serveStatic = require('serve-static')
app.use('/styles', sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'expanded'
}));
app.use('/',
  serveStatic('./public', {})
);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var MoveRouter       = require('./routes/move');
var TheaterRouter       = require('./routes/theater');
var AppRouter       = require('./routes/index');

// use jsx 
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api/moves', MoveRouter);
app.use('/api/theater', TheaterRouter);
app.use('/', AppRouter);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);