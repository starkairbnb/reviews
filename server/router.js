const router = require('express').Router();
const controller = require('./controller.js');

router.route('/rating')
  .get(controller.getRating);

router.route('/reviews')
  .get(controller.getReviews);

module.exports = router;