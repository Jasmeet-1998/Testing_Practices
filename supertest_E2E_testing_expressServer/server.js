const express = require('express');
const api = express();
const router = require('./routes');

api.use(express.json());
api.use(router);


module.exports = api;