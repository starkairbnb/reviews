const pool = require('../Postgresql/index.js');

const helper = {
  getReview: (id) => {
    return pool.query(`SELECT * FROM reviews WHERE propertyid=${id}`)
  },
  postReview: (body) => {
    const queryText = 'INSERT INTO reviews (id,propertyid,accuracy,communication,cleanliness,location,checkin,value,average,username,date,textbody,userimage) VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)';
    const queryValues = [
      body.propertyid,
      body.accuracy,
      body.communication,
      body.cleanliness,
      body.location,
      body.checkin,
      body.value,
      body.average,
      body.username,
      body.date,
      body.textbody,
      body.userimage
    ];
    return pool.query(queryText, queryValues);
  },
  updateReview: (id, body) => {
    const queryText = `UPDATE reviews SET propertyid=$1,accuracy=$2,communication=$3,cleanliness=$4,location=$5,checkin=$6,value=$7,average=$8,username=$9,date=$10,textbody=$11,userimage=$12 WHERE propertyid=${id}`;
    const queryValues = [
      body.propertyid,
      body.accuracy,
      body.communication,
      body.cleanliness,
      body.location,
      body.checkin,
      body.value,
      body.average,
      body.username,
      body.date,
      body.textbody,
      body.userimage
    ];
    return pool.query(queryText, queryValues);
  },
  deleteReview: (id) => {
    return pool.query(`DELETE FROM reviews WHERE id=${id}`)
  },
}

module.exports = helper;