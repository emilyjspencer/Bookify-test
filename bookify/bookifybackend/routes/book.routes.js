let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();


let bookSchema = require('../models/Book');


router.route('/create-book').post((req, res, next) => {
  bookSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

router.route('/').get((req, res) => {
    bookSchema.find((err, data) => {
      if (error) {
        return next(err)
      } else {
        res.json(data)
      }
    })
  })



module.exports = router;