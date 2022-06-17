const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', () => {
    console.log(`DB ${db.name} and ${db.host} connected on PORT ${db.port}`)
})