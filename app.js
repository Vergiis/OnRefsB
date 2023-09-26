const express = require('express');
const path = require('path');

const routes = require('./routes/routes');

const cons = require('consolidate');
const cors = require('cors');

const app = express();

module.exports = app;

app.use(cors());

/**
 *  App Configuration
 */
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes Definitions
 */
app.use('/', routes);
