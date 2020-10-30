const cookieParser = require("cookie-parser");
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');

var app = express();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var publicationRouter = require('./routes/Publication');


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(express.json());
//adicionado
app.use(session({
  secret: 'super secret session key',
  resave: false,
  saveUninitialized: true,
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/publication',publicationRouter);



//Retorno 
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
}); 

module.exports = app;

