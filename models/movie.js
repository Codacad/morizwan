const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    content:String,
    rating:{type: Number, min: 1, max: 5, default: 5}
}, {
    timestamps:true
})

const moviesSchema = new Schema({
    title:String,
    releaseYear:Number,
    mpaaRating:String,
    cast:[String],
    nowShowing:Boolean,
    reviews:[reviewsSchema]
}, {timestamps:true})


const Movie = mongoose.model('Movie', moviesSchema)

module.exports =  Movie;