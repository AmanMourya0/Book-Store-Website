const express = require('express')
const app = express()
const dotenv=require("dotenv")
dotenv.config();
const port=process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('Hello Aman!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})