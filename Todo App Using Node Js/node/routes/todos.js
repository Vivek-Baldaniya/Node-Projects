const express = require('express');

const Todos = require('../models/todos');

const router = express.Router();

// let todos = [];

router.get('/todos', async(req, res, next) => {
    const todos = await Todos.find();
    res.json({ todos: todos });
});

router.post('/todos', async(req, res, next) => {
    console.log(req.body.text);
    const newTodo = new Todos({ text: req.body.text });
    await newTodo.save();
    res.status(201).json({ message: 'Todo Created!', todo: newTodo });
});

router.put('/todos/:todoId', async(req, res, next) => {
    const tid = req.params.todoId;
    const todo = await Todos.findById(tid);
    if (!todo) {
        const error = new Error("No todo found");
        error.status(404);
        throw error;
    }
    todo.text = req.body.text;
    const updatedTodo = await todo.save();
    res.status(200).json({ message: 'Updated Todo...', todo: updatedTodo });
});

router.delete('/todos/:todoId', async(req, res, next) => {
    const tid = req.params.todoId;
    await Todos.findByIdAndRemove(tid);
    res.status(200).json({ message: "Todo Deleted..." });
});

module.exports = router;