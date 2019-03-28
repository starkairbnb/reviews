const Model = require('../database/models.js');
const mongoose = require('mongoose');

module.exports = {
  getRating: (req, res) => {
    // mongoose.connection.db.ratings.aggregate([{ $sample: { size: 3}}])
    Model.Rating.count()
      .then((count) => {
        let random = Math.random() * count;
        return Model.Rating.findOne().skip(random);
      })  
      .then((data) => {
        res.status(200).send(data)
      })
    
  },

  postRating: (req, res) => {
    
  },

  getReviews: (req, res) => {
    res.send('got reviews')
  }

  
}