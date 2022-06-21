const { Pool } = require('pg');

const myURI =
  'postgres://nroadcaz:qiBiuVq7diAQ4m47JWJQ4DHkX4li1uAT@heffalump.db.elephantsql.com/nroadcaz';
const URI = process.env.PG_URI || myURI;

const pool = new Pool({ connectionString: URI });

module.exports = {
  query: (text, params, callback) => {
    console.log('query', text);
    return pool.query(text, params, callback);
  },
};
