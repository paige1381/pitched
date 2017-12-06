// Dependencies =======================
// require
const express = require('express'); // npm i express
const mongoose = require('mongoose'); // npm i mongoose
const morgan = require('morgan'); // npm i morgan
require('pretty-error').start(); // npm i pretty-error
const app = express();
const methodOverride = require('method-override'); // npm i method-override
const session = require('express-session');
const bcrypt = require('bcrypt');

// controllers
const reviewsController = require('./controllers/reviews.js');
const commmentsController = require('./controllers/comments.js');
const sessionsController = require('./controllers/session.js');


// Port ===============================
const PORT = process.env.PORT || 3000; // (remote || local)


// Database ===========================
// connect
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pitched_reviews'; // locate mongo databases (remote || local)
mongoose.connect(mongoURI, { useMongoClient: true }); // connect to location
mongoose.Promise = global.Promise; // setting the promise library to native

// errors
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));


// Middleware =========================
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(morgan('dev')); // logs request info in console
app.use(session({
  secret: "feedmeseymour", //some random string
  resave: false,
  saveUninitialized: false
}));


// Routes =============================
// controllers
app.use('/reviews', reviewsController);
app.use('/comments', commmentsController);
app.use('/user', sessionsController);

// root
app.get('/', (req, res) => {
  res.redirect('/reviews');
});


// Listen =============================
app.listen(PORT, console.log('listening on port', PORT));
