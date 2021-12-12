const { application } = require('express');
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const app = express();


mongoose.connect(process.env.ATLAS_DB, { useNewUrlParser: true })
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('connected to database')
})

  app.get('/', (req, res) => { res.send('hello') })
  port = process.env.port || 5000;
  app.listen(port, console.log(`server on port ${port}`))
