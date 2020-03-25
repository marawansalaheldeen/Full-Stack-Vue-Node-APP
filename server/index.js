const express = require('express')
const bodyParser = require('body-parser')
const cros = require('cors')
//
const app = express()
app.use(bodyParser.json())
app.use(cros())

const posts = require('./routes/api/posts')
app.use('/posts',posts)

const port = process.env.PORT || 3000

app.listen(port,()=>{console.log(`server run on port ${port}`)})
