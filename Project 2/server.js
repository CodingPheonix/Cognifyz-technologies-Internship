import express from "express"
import bodyParser from "body-parser";
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/submit', (req, res) => {
    const { username, email, password, gender, terms } = req.body;

    const errors = [];
    if (!username || !email || !password || !gender || !terms) {
        errors.push('Server: All fields are required.');
    }

    if (password && password.length < 6) {
        errors.push('Server: Password must be at least 6 characters long.');
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        errors.push('Server: Invalid email format.');
    }

    if (errors.length > 0) {
        return res.status(400).json({ success: false, errors });
    }

    const tempData = { username:username, email: email, gender: gender, password: password, terms:terms };
    console.log('Validated data:', tempData);
    res.json({ success: true, message: 'Form submitted successfully.', data: tempData });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})