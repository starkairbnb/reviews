const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  propertyId: Number,
  accuracy: Number,
  communication: Number,
  cleanliness: Number,
  location: Number,
  checkIn: Number,
  value: Number,
  average: Number,
  username: String,
  date: String,
  textbody: String,
  userImage: String,
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
