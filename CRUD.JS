const { application } = require('express');
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const app = express();
app.get('/', (req, res) => { res.send('hello')})
port = process.env.port ||5000;
app.listen(port,console.log(`server on port ${port}`))