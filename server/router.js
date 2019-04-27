const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/reviews/:propertyId')
  .get(controller.getReview)

router
  .route('/reviews/id/:id')
  .put(controller.updateReview)
  .delete(controller.deleteReview);

  router
  .route('/reviews')
  .post(controller.postReview);
  
module.exports = router;