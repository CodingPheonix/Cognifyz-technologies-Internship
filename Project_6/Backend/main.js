import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import { Role_data, User_data } from "./schema.js"

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/Server_auth')
    .then(console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//  SIGN UP DATA
app.post('/upload_data', async (req, res) => {
    try {
        const { name, email, password, role } = req.body
        const all_logins = await User_data.find({ email: email })

        if (all_logins.length > 0) {
            res.status(400).send({ message: "User already exists" })
        }
        else {
            const new_user = new User_data({
                name: name,
                email: email,
                password: password,
                role: role,
                tasks: []
            })
            await new_user.save()
            res.status(200).send({ message: "User created", data: new_user })
        }
    } catch (error) {
        res.status(500).send({ message: "Error", error: error })
    }
})

//  LOG IN DATA
app.put('/login_data', async (req, res) => {
    try {
        const { email, password } = req.body

        const req_user = await User_data.findOne({ email: email, password: password })

        if (req_user) {
            res.status(200).send({ message: "User logged in", data: req_user })
        } else {
            res.status(400).send({ message: "Invalid email or password" })
        }
    } catch (error) {
        res.status(500).send({ message: "Error", error: error })
    }
})

// POST ROLE AND TASK DATA
app.post('/upload_taskData', async (req, res) => {
    try {
        const { role, task } = req.body

        const new_role = new Role_data({
            role: role,
            task: task
        })
        await new_role.save()
        res.status(200).send({ message: "Role created", data: new_role })
    } catch (error) {
        res.status(500).send({ message: "Error", error: error })
    }
})

// GET ALL ROLE DATA
app.get('/get_roleData', async (req, res) => {
    try {
        const all_roles = await Role_data.find({})
        res.status(200).send({ message: "Roles Recieved", data: all_roles })
    } catch (error) {
        res.status(500).send({ message: "Error", error: error })
    }
})

// GET ALL TASK DATA
app.get('/get_tasks/:id', async (req, res) => {
    try {
        const { id } = req.params
        const target_user = await User_data.findById(id)
        if (target_user) {
            const tasks = await Role_data.find({ role: target_user.tasks[0] })
            res.status(200).send({ message: "Tasks Recieved", data: tasks[0] })
        } else {
            res.status(404).send({ message: "User not found" })
        }
    } catch (error) {
        res.status(500).send({ message: "Error", error: error })
    }
})

//  GET ALL USERS
app.get('/get_users', async (req, res) => {
    try {
        const all = await User_data.find({})
        const all_users = all.filter(user => user.role === "user")
        res.status(200).send({ message: "Users Recieved", data: all_users })
    } catch (error) {
        res.status(500).send({ message: "Error", error: error })
    }
})

//  ASSIGN ROLE
app.put('/assign', async (req, res) => {
    try {
        const { curr_user, role } = req.body;

        const target_user = await User_data.findOneAndUpdate(
            { name: curr_user },
            { $push: { tasks: role } },
            { new: true }
        );

        if (!target_user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send({ message: "Role assigned", data: target_user });
    } catch (error) {
        res.status(500).send({ message: "Error assigning", error: error.message });
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})