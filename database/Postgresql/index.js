const pg = require('pg');

// const connectionString = 'postgresql://54.215.224.36:5432/starkbnb';
// const pool = new pg.Pool({ connectionString });

const pool = new pg.Pool({
  user: 'postgres',
  host: '13.56.81.132',
  database: 'starkbnb',
  password: 'docker',
  port: 5432,
})

pool
  .connect()
  .catch(err => console.log(err))

// option to generate table and import data on database connection
/*pool.query('CREATE TABLE reviews (id SERIAL NOT NULL,propertyId INT NOT NULL,accuracy FLOAT NOT NULL,communication FLOAT NOT NULL,cleanliness FLOAT NOT NULL,location FLOAT NOT NULL,checkIn FLOAT NOT NULL,value FLOAT NOT NULL,average FLOAT NOT NULL,username TEXT NOT NULL,date TEXT NOT NULL,textbody TEXT NOT NULL,userImage TEXT NOT NULL);')
  .then(() => pool.query('COPY reviews(propertyId,accuracy,communication,cleanliness,location,checkIn,value,average,username,date,textbody,userImage) from '/Users/danielsu/Hack Reactor/SDC/reviews/database/reviewsData.csv' delimiter ',' csv;'))
  .catch(err => consol.error(err));
*/

module.exports = pool;
