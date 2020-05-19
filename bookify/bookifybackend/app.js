let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');
let dbConfig = require('./database/db');

const bookRoute = require('../backend/routes/book.route')

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('A connection to the database has been established')
},
  error => {
    console.log('A connection to the database was not established: ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/books', bookRoute)


app.listen(3000, function() {
    console.log('Listening to requests on Port 3000')
});

