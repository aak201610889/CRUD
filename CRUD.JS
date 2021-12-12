const { application } = require('express');
const express = require('express')
const mongoose = require('mongoose')
const app = express();
app.get('/', (req, res) => { res.send('hello')})
port = process.env.port ||5000;
app.listen(port,console.log(`server on port ${port}`))