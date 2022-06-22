const { Pool, Query } = require('pg');

const myURI =
  'postgres://nroadcaz:qiBiuVq7diAQ4m47JWJQ4DHkX4li1uAT@heffalump.db.elephantsql.com/nroadcaz';
const URI = process.env.PG_URI || myURI;

const pool = new Pool({ connectionString: URI });

// callback set to type any until I can remember what to type callbacks as.
module.exports = {
  query: (text: string, params: string[], callback: any) => {
    console.log('query', text);
    return pool.query(text, params, callback);
  },
};
