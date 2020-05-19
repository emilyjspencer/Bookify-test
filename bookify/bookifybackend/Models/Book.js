const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
  booktitle: {
    type: String
  },
  author: {
    type: String
  },
  genre: {
    type: String
  }
}, {
    collection: 'books'
  })

module.exports = mongoose.model('Book', bookSchema)