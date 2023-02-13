const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

const app = express()
const port = 3000

const cors = require('cors')
const User = require('./models/user.model')

app.use(cors())
app.use(express.json())

mongoose.connect('URI')

app.post('/api/register', async (req, res) => {
    console.log(req.body)

    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.status(201)
    } catch (err) {
        res.json('user already exists')
    }

})

app.post('/api/login', async (req, res) => {
    console.log(req.body)

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if (user) {

        const token = jwt.sign(
            {
                email: req.body.email,
                name: req.body.name,
            },
            "pweaseChangeMe!!!1!!",
            { expiresIn: '1h' }
        )

        return res.json({ status: 'ok', user: token });
    } else {
        return res.json({ status: 'error', user: false });
    }
})


app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))

