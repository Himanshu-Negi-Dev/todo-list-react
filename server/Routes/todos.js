const express = require("express");
const router = express.Router();
const Todo = require("../models/todos");

//create a todo
router.post("/add", async (req, res) => {
   try {
      // console.log(req);
      // console.log(req.body);
      const todo = new Todo({
         text: req.body.text,
      });

      const newTodo = await todo.save();
      res.status(200).json(newTodo);
   } catch (err) {
      res.status(500).json({
         msg: "server error",
      });
   }
});

//get todos
router.get("/", async (req, res) => {
   try {
      const todos = await Todo.find();

      res.status(200).json(todos);
   } catch (err) {
      console.log(err.message);
      res.status(500).json({
         msg: "server error",
      });
   }
});
router.get("/:id", async (req, res) => {
   try {
      const todo = await Todo.findById({_id: req.params.id});

      res.status(200).json(todo);
   } catch (err) {
      console.log(err.message);
      res.status(500).json({
         msg: "server error",
      });
   }
});
//update todos
router.put("/todo/:id", async (req, res) => {
   try {
      const todo = await Todo.findByIdAndUpdate(
         { _id: req.params.id },
         { $set: { text: req.body.text } },
         { new: true }
      );
      res.status(200).json(todo);
   } catch (err) {
      console.log(err.message);
      res.status(500).json({
         msg: "server error",
      });
   }
});

//deletind routes

router.delete("/:id", async (req, res) => {
   try {
      await Todo.findByIdAndRemove({ _id: req.params.id });
      res.status(200).json({
         msg: "delete sucessfull",
      });
   } catch (err) {
      console.log(err.message);
      res.json({
         msg: "server error",
      });
   }
});

module.exports = router;
