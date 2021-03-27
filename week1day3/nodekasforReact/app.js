var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const authorization = require('./middleware/authorization');
const cors=require('cors');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://node_course:2300@sandbox.lgbrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url, { useUnifiedTopology: true });
let connection;

var usersRouter = require('./routes/students');
var loginregisterRouter = require('./routes/loginRegister');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', (req, res, next) => {
  if (!connection) { // connect to database
    console.log('connecting');
    client.connect(function (err) {
      connection = client.db('React');
      req.db = connection;
      next();
    })
  } else { // 
    req.db = connection;
    next();
  }
});
//check token before login
app.use(authorization.checkToken);
//http://localhost:5000/loginregister
app.use('/loginregister',loginregisterRouter)
//http://localhost:5000/students
app.use('/students', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000, console.log("listening..."))
