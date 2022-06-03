require('dotenv').config()
const express = require('express')
const app = express()
const router = require("./routes/index");
require("./interfaces/db/database")

//midlewares
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})