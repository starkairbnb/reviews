const helper = require('../database/Postgresql/postgresHelpers'); // uncomment for postgresql compatibility
// const helper = require('../database/MongoDB/mongoHelpers'); // uncomment for mongo compatibility

module.exports = {
  getReview: (req, res) => {
    const { propertyId } = req.params;
    helper.getReview(propertyId)
      .then(data => res.status(200).send(data.rows[0]))
      .catch(err => res.status(404).send(err));
  },
  postReview: (req, res) => {
    helper.postReview(req.body)
      .then(() => res.status(201).send('Post successful'))
      .catch(err => res.status(404).send(err))  
  },
  updateReview: (req, res) => {
    const { id } = req.params;
    helper.updateReview(id, req.body)
      .then(() => res.status(202).send('Update successful'))
      .catch(err => res.status(404).send(err))
  },
  deleteReview: (req, res) => {
    const { id } = req.params;
    helper.deleteReview(id)
      .then(() => res.status(203).send('Delete successful'))
      .catch(err => res.status(404).send(err))
  },
}