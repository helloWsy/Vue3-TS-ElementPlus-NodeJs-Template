const express = require('express')
const pg = require('pg');
const config = require('../config/default');
const pool = new pg.Pool(config.my_dbConfig_master)

function con_write() {
  let dbConfig = config.my_dbConfig_master;
  let connection = mysql.createConnection(dbConfig);
  connection.connect();
  return connection;
}

async function con_read(sql) {
  let dbConfig = config.my_dbConfig_master;
  return new Promise((resolve, reject) => {
    pool.connect((err, connection) => {
      if(err) {
        reject(err)
      }
      connection.query(sql, (err, res) => {
        if(err) {
          reject(err)
        }
        resolve(res.rows)
        connection.release()
      })
    })
  })
}

module.exports = {
  con_write,
  con_read
}
