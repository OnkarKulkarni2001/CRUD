const express = require('express');
const { route } = require('express/lib/application');
const task = require('../models/task');
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.send('Error' + err);
    }
})


router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (err) {
        res.send('Error' + err);
    }
})


router.post('/', async (req, res) => {
    const task = new Task({
        description: req.body.description,
        completed: req.body.completed
    })

    try {
        const a1 = await task.save();
        res.json(a1);
    }
    catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        task.completed = req.body.completed
        const a1 = await task.save();
        res.json(a1);
    } catch (err) {
        res.send('Error')
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        task.completed = req.body.completed
        const a1 = await task.delete();
        res.json(a1);
    } catch (err) {
        res.send('Error')
    }
})

module.exports = router;
