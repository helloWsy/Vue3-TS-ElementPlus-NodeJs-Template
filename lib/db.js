const express = require('express')
const pg = require('pg');
const config = require('../config/default');
const pool = new pg.Pool(config.my_dbConfig_master)

// const aa = new pg.

module.exports = db = async(sql)=> {
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