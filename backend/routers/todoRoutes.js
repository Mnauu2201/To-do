const express = require('express');
const router = express.Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createAt: -1 });
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});;

router.post("/", async (req, res) => {
    try {
        const newTodo = new Todo({
            title: req.body.title,
            completed: false,
            createAt: new Date()
        });
        await newTodo.save();
        res.json(newTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updated = await Todo.findByIdAndUpdate(
            req.params.id,
            { completed: req.body.completed },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Todo.finByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.export = router;