const mongoose = require("mongoose");

// Define Schemes
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String },
    nickName: { type: String },
    method: { type: String, required: true },
    profileUrl: { type: String },
    profileContent: { type: String },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
module.exports = mongoose.model("User", userSchema, "user");
