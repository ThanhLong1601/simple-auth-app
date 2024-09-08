const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
var passport = require("passport");
var crypto = require("crypto");
var routes = require("./routes");
const connection = require("./config/database");

const MongoStore = require("connect-mongo");

require("dotenv").config();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const sessionStore = new MongoStore({
//   mongooseConnection: connection,
//   collection: "sessions",
// });

const sessionStore = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  collectionName: "sessions",
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// Passport Authentication
require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

// Routes
app.use(routes);

app.listen(3000);
