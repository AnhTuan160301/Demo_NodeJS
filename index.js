// Import Library
const express = require('express')
// Tra ve doi tuong dai dien cho application
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
