import mongoose from 'mongoose';

const task_schema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})

export const Task = mongoose.model('Task', task_schema)