const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    age: {
      type: Number,
      min: 1,
      max: 100,
    },
    role: {
      type: Number,
      required: true,
    },
    password:{
      type:String,
      required:true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
