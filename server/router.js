const router = require('express').Router();
const controller = require('./controller.js');

router.route('/rating')
  .get(controller.getRating);
  
router.route('/reviews/')
  .get(controller.getReviewCount);

router.route('/reviews/:page')
  .get(controller.getReviewPage);


module.exports = router;