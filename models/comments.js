const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  commenter: {type: String, required: true},
  comment: {type: String, required: true},
  review: {type: mongoose.Schema.Types.ObjectId, ref: 'Review'}
},
{
  timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);
