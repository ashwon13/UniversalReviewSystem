const { Pool } = require('pg')//importing pg library but only importing pool logic


const pool = new Pool();//creating an instance of pool to use




module.exports = {
  query: (text, params) => pool.query(text, params),
}