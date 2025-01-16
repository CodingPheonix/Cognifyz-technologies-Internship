import mongoose from "mongoose";

const data_schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    tasks: [String]
})

const role_schema = new mongoose.Schema({
    role: String,
    task: [String]
})

export const User_data = mongoose.model('User_data', data_schema)
export const Role_data = mongoose.model('Role_data', role_schema)