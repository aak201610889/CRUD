const mongoose = require('mongoose')
let User = mongoose.model('User', new mongoose.Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType:String
  }
}))
module.exports = User;