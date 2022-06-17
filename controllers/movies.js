const Movie = require('../models/movie')

const new_movie = (req, res) => {
    res.render('movies/new', {title:'Create Movie'})
}
const movies = (req, res) => {
    Movie.find().sort({createdAt:-1}).then((movies) => {
        res.render('movies/movies', {title:'Movies', movies})
    })
}
const create_movie = (req, res) => {

    req.body.nowShowing = !!req.body.nowShowing

    if(req.body.cast){
        req.body.cast = req.body.cast.split(',')
    }
    const newMovie = new Movie(req.body)
    newMovie.save()
        .then((err, data) => {
            res.redirect('/movies')
        }).catch(err => res.send({message:err.message}))
}

const movie_reviews = (req, res) => {
    Movie.findOne({title:req.params.title})
        .then(movie => {
            res.render('movies/movie-reviews', {title:req.params.title, movie})
        }).catch(err => res.send({message:err.message}))
}

const delete_movie = (req, res) => {W
    Movie.findById({_id:req.params.id}).then((mov) => {
        res.send(mov)
        console.log(mov)
        // res.redirect('/movies')
    }).catch(err => res.send({message:err.message}))
}

const create_review = (req, res) => {
    Movie.findOne({title:req.params.title}, (err, movie) => {
        if(err){
            throw err
        }
        movie.reviews.push(req.body)
        movie.save().then(() => {
            console.log("Review Saved")
            res.redirect(`/movies/${req.params.title}`)
        }).catch(err => res.send({message:err.message}))
    })
}

module.exports = {
    new_movie, // create movie
    movies,
    create_movie,
    movie_reviews,
    delete_movie,
    create_review
}