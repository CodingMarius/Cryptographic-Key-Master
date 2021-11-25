const express = require("express");

const app = express.Router();

app.get("/", (req, res) => {
  res.render("index", {page: require('../content/index.json'), root: require('../content/root.json')});
});

app.get("/jwt", (req, res) => {
    res.render("jwt", {page: require('../content/jwt.json'), root: require('../content/root.json')});
});

app.get("/session", (req, res) => {
    res.render("session", {page: require('../content/session.json'), root: require('../content/root.json')});
});

app.get("/password", (req, res) => {
    res.render("password", {page: require('../content/password.json'), root: require('../content/root.json')});
});

module.exports = app;
