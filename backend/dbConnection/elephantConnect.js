const { Pool } = require('pg');

const DB_URL = 'postgres://whtwsukf:6FB4XcHcbTSLXkbEA-Nync4FufbdLPdy@suleiman.db.elephantsql.com/whtwsukf';

const pool = new Pool({
  connectionString: DB_URL,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
