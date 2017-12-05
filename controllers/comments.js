// Dependencies =======================
// require
const express = require('express');
const router  = express.Router();

// model
const Comment = require('../models/comments.js');


// Routes
// index
router.get('/', async (req, res) => {
  const allComments = await Comment.find().populate('photo');
  res.send(allComments);
});

// create
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.redirect('back');
  }
  catch (err) {
    res.send(err.message);
  }
})

// delete
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndRemove(req.params.id);
    res.redirect('back');
  }
  catch (err) {
    res.send(err.message);
  }
});


module.exports = router;
