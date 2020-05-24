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
});

router.route('/edit-book/:id').get((req, res) => {
  bookSchema.findById(req.params.id, (err, data) => {
      if (err) {
        return next(err)
      } else {
        res.json(data)
      }
    })
});

router.route('/update-book/:id').put((req, res, next) => {
  bookSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
    }, (err, data) => {
      if (error) {
        return next(err);
        console.log(err)
      } else {
        res.json(data)
        console.log('Book was updated')
      }
    })
});



module.exports = router;