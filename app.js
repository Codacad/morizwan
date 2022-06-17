const express = require('express')
const morgan =  require('morgan')
const path = require('path')
require('dotenv/config')
const app = express()
const routes = require('./routes/route')
const PORT = process.env.PORT || 5000

//DB Connection
require('./config/database')

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.use(morgan('dev'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/',  routes)