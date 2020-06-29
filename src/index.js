const express = require('express');

const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const indexRouter = require('./routers/indexRouter');

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

module.exports = app;
