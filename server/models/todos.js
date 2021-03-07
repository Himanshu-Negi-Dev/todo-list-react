const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
   text: {
      type: String,
      trim: true,
      require: true,
   },

   date: {
      type: Date,
      default: Date.now,
   },
});

module.exports = Todo = mongoose.model('todo',TodoSchema); 
