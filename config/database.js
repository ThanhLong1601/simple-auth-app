const mongoose = require("mongoose");

require("dotenv").config();

const conn = process.env.MONGO_URI;

const connection = mongoose.createConnection(conn, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,

  serverSelectionTimeoutMS: 5000, // Optional: Add a timeout for server selection
  socketTimeoutMS: 45000, // Optional: Add a timeout for socket operations
});

const UserSchema = new mongoose.Schema({
  username: String,
  hash: String,
  salt: String,
  admin: Boolean,
});

const User = connection.model("User", UserSchema);

module.exports = connection;
