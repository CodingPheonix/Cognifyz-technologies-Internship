import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Task_form = ({ onAddTask, onModifyTask, modify, taskToEdit }) => {
    const [task, setTask] = useState(taskToEdit?.task || "");

    // Pre-fill the form when editing
    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit.task); 
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            if (modify && taskToEdit) {
                onModifyTask({ ...taskToEdit, task:task });
            } else {
                onAddTask({ id: uuidv4(), task: task });
            }
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-4 my-4">
            <input
                type="text"
                placeholder="Enter your task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="flex-1 p-2 text-lg border shadow-xl border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button
                type="submit"
                className="px-4 py-2 text-lg text-white shadow-xl bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {modify ? "Update Task" : "Add Task"}
            </button>
        </form>
    );
};


export default Task_form
