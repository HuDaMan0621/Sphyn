var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRouter = require('./routes/api');

const { sequelize } = require('./models');
const customer = require('./models/customer');
const db = require('./models');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const store = new SequelizeStore({ db: db.sequelize })

var app = express();

app.use(
  session({
    secret: 'secret', // used to sign the cookie
    resave: false, // update session even w/ no changes
    saveUninitialized: true, // always create a session
    store,
    // cookie: {
    //   secure: false, // true: only accept https req’s
    //   maxAge: 6000000, // time in seconds
    // },
  })
);

store.sync();  //!THIS IS THE SESSION, VERY IMPORTANT

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', apiRouter); 

// TODO PUT REACT APP HERE
app.get((req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
})

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
  res.json('error');
});

module.exports = app;
