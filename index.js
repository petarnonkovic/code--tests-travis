const express = require('express')
const app = express()
const greeting = require('./helpers/greeting')

app.get('/', (req, res) => {
  let userName = 'ci travis'
  let response = greeting(userName)
  res.send(response)
})

const server = app.listen(4400, () => console.log('App running'))

module.exports = server
