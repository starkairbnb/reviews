const pg = require('pg');

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

module.exports = pool;
