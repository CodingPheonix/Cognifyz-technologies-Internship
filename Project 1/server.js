import bodyParser from "body-parser";
import express from "express"

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.post('/submit', (req, res) => {
    const { username, email } = req.body
    res.render('responce.ejs', { username: username, email: email })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})