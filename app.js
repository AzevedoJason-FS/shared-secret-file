const express = require('express')
require("dotenv").config("./.env");
const app = express()

app.get('/', (req, res) => {
    res.send(process.env.ACCESS_TOKEN)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })