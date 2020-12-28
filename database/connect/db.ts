const { Pool } = require('pg')

const db = new Pool({
  host: 'localhost',
  port: 5432,
  username: 'derek',
  password: 'open',
  database: 'shadetree'
})

export default db;
