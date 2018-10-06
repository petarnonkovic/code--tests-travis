const express = require('express')
const app = express()

app.get('', (req, res) => {
  res.send('ci with travis')
})

const server = app.listen(4400, () => console.log('App running'))

module.exports = server
