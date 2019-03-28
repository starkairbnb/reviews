const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
  accuracy: Number,
  communication: Number,
  cleanliness: Number,
  location: Number,
  checkIn: Number,
  value: Number,
  average: Number
})

const reviewSchema = mongoose.Schema({
  user: String,
  month: String,
  year: String,
  text: String,
  userImage: String
})

const Rating = mongoose.model('Rating', ratingSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
  Rating,
  Review
}