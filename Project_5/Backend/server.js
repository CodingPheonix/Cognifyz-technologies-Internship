import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { Task } from './schema.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/taskquest')
    .then(() => { console.log('Connected to MongoDB') })
    .catch((err) => { console.log(err) });

app.get('/get-tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send({ message: "tasks fetched successfully", data: tasks });
    } catch (error) {
        throw new Error("Internal server error");
    }
})

app.post('/add-task', async (req, res) => {
    try {
        const { task, id } = req.body;
        const newTask = new Task({ task: task, id: id });
        await newTask.save();
        res.send({ message: 'Task added successfully', data: newTask });
    } catch (error) {
        throw new Error("Internal server error");
    }
})

app.put('/modify-task/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { task } = req.body;

        const updated_task = await Task.findOne({ id : id})
        updated_task.task = task;
        updated_task.save();
        res.send({ message: 'Task updated successfully', data: updated_task });
    } catch (error) {
        throw new Error("Internal server error");
    }
})

app.delete('/delete-task/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findOneAndDelete({ id: id });
        res.send({ message: 'Task deleted successfully' });
    } catch (error) {
        throw new Error("Internal server error");
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});