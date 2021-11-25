const express = require("express");

const session = require("express-session");

const path = require("path");

const cors = require("cors");

const flash = require("express-flash");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(
  session({
    secret: "null",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  })
);

app.use(flash());

app.use(express.static(path.join(__dirname, "/views/assets")));

app.use("/", require("./routes/frontend"));

app.use("/", require("./routes/backend"));

app.listen(port, function () {
  console.log(`App running on port ${port}`);
});
