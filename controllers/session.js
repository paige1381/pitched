// Dependencies =======================
// require
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// models
const User = require('../models/users.js');
const Review = require('../models/reviews.js');


// Routes =============================
// login
router.get('/login', async (req, res) => {
  try {
    const allReviews = await Review.find().sort({createdAt: -1}).limit(6);
    res.render('./reviews/login.ejs', {
      allReviews: allReviews,
      message: req.session.message
    });
  }
  catch (err) {
    res.send(err.message);
  }
});


router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    // console.log(user);
    if (bcrypt.compareSync(req.body.password, user.password)) {
      req.session.username = req.body.username;
      req.session.logged  = true;
      // console.log(req.session, req.body);
      res.redirect('/reviews')
    }
    else {
      req.session.message = 'Username or password is incorrect';
      res.redirect('/user/login');
    }
  }
  catch (err) {
      req.session.message = 'Username or password is incorrect';
      res.redirect('/user/login');
  }
});

// register
router.post('/register', async (req, res) => {
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const userDbEntry = {};
  userDbEntry.username = req.body.username;
  userDbEntry.password = passwordHash;
  try {
    const user = await User.create(userDbEntry);
    req.session.username = user.username;
    req.session.logged  = true;
    res.redirect('/reviews');
  }
  catch (err) {
    res.send(err.message);
  }
});

// logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/user/login');
});


module.exports = router;
