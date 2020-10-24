const mongoose = require("mongoose");
const Todo = mongoose.Schema({
  text: {
    type: String,
  },
  user_id:String,
});
module.exports = mongoose.model("Todo", Todo);