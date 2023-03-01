const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = require('./session');

const corsOption = {
  origin: 'http://localhost:3000',
  credential: true,
};

const serverConfig = (app) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(cors(corsOption));
  app.disable('x-powered-by');
};

module.exports = serverConfig;
