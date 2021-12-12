const { application } = require('express');
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const multer = require("multer");
const app = express();


mongoose.connect(process.env.ATLAS_DB, { useNewUrlParser: true })
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('connected to database')
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

let upload = multer({ storage: storage });

var imgModel = require("./model/userModel");
app.get("/", (req, res) => {
  imgModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.render("imagesPage", { items: items });
    }
  });
});
app.post("/", upload.single("image"), (req, res, next) => {
  var obj = {
    name: req.body.name,
    desc: req.body.desc,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };
  imgModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();
      res.redirect("/");
    }
  });
});

  port = process.env.port || 5000;
  app.listen(port, console.log(`server on port ${port}`))
