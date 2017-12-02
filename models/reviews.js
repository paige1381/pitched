const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  img: [String],
  submitter: {type: String, require: true},
  review: {type: String, require: true},
  location: {type: String, require: true},
  site: String,
  rating: {type: Number, require: true},
  type: {type: String, require: true}
},
{
  timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);
