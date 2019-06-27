var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 数据库
var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost:27017/charls-system';
mongoose.connect(dbUrl, {useNewUrlParser: true});

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
require('./config/routes')(app);

module.exports = app;
