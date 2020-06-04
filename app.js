const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 5050
const dbConfig = require('./config/dbconfig')
const cors = require('cors')

mongoose.connect(dbConfig.mongoURL, {
    useNewUrlParser: true
}).then(() => console.log ("connect mongodb"))
    .catch(err => console.log(err))

app.use(cors())

app.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}))

app.use('/user' , require('./routes/User'))

app.listen(port, function () {
    console.log('Server Berjalan Di Port'+port)
})