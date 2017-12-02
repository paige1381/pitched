const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
  {
    submitter: {type: String, required: true},
    review: {type: String, required: true},
    location: {type: String, required: true},
    site: String,
    rating: {type: Number, required: true},
    type: {type: String, required: true},
    img: [String]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Review', reviewSchema);
