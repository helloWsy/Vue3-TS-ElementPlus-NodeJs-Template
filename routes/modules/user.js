const express = require('express')
const db = require('../../lib/db')
const app = express()

app.post("/login", async (req, res) => {
  const connection_read = db.con_read
  const { username, password } = req.query
  const sql = `SELECT * FROM "user" WHERE name = '${username}' and password = '${password}'`
  const result = await connection_read(sql)
  
  if(result.length) {
    res.json({
      code: 200,
      data: 'success'
    })
  }else {
    res.json({
      code: 401,
      data: 'error'
    })
  }
})

module.exports = app