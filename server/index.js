const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.post('/api/register', (req, res) => {
    console.log(req.body)

    res.json({ status: 'ok' })
})


app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))

