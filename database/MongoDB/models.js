const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
  propertyId: Number,
})

const reviewSchema = mongoose.Schema({
  propertyId: Number,
  accuracy: Number,
  communication: Number,
  cleanliness: Number,
  location: Number,
  checkIn: Number,
  value: Number,
  average: Number,
  user: String,
  date: String,
  text: String,
  userImage: String,
})

const Property = mongoose.model('Property', propertySchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
  Property,
  Review
}