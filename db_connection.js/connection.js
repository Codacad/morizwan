const mongoose = require('mongoose');

const connection = (req, res, next) => {
    mongoose.connect('mongodb://localhost:27017/messages', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to DB')
    }).catch(err => {
        console.log(err)
    })
    next()
}



module.exports =  connection