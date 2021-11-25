const express = require('express');

const app = express.Router();

const { generateJWT, generateSession, hashPassword } = require('../controller/generate.key');

app.post('/jwt', generateJWT);

app.post('/session', generateSession);

app.post('/password', hashPassword);

module.exports = app;