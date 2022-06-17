const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const { index, resume, message_create, blog} = require('../controllers/controller')
const {new_movie, movies, create_movie, movie_reviews, delete_movie, create_review} = require('../controllers/movies')


router.get('/', index)
router.post('/', message_create)
router.get('/resume', resume)
router.get('/blog', blog)


// movies controllers
router.get('/movies/new', new_movie)
router.get('/movies', movies)
router.post('/movies/new', create_movie)
router.get('/movies/:title', movie_reviews)
router.delete('/movies/:id', delete_movie)
router.post('/movies/:title', create_review)


module.exports = router