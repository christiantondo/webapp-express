const db = require('../data/db');

const index = (req, res) => {
    const sqlQuery = 'SELECT * FROM movies';
    db.query(sqlQuery, (err, results) => {
        if (err) {
            console.error('DB QUERY FAILED', err);
            return res.status(500).json({
                error: 'Database error',
                message: err.message
            })
        }

        res.json(results)
    });
}

const show = (req, res) => {
    const id = req.params.id;

    const sqlQueryMovies = 'SELECT * FROM movies WHERE id = ?';
    const sqlQueryReviews = 'SELECT * FROM reviews WHERE movie_id = ?';

    db.query(sqlQueryMovies, [id], (err, movies) => {

        if (err) {
            console.error('DB QUERY FAILED', err);
            return res.status(500).json({
                error: 'Database error',
                message: err.message
            })
        }

        if (movies.length === 0 || movies[0].id === null) {
            return res.status(404).json({
                error: 'Not found',
                message: 'Could not find requested movie'
            });
        }

        const movie = movies[0];
        console.log('initial movie', movie);

        db.query(sqlQueryReviews, [id], (err, reviews) => {

            if (err) {
                console.error('DB QUERY FAILED', err);
                return res.status(500).json({
                    error: 'Database error',
                    message: err.message
                });
            }

            movie.reviews = reviews;

            console.log('reviews', reviews);
            console.log('movie with reviews', movie);

            res.json(movie);
        });


    });
}

module.exports = { index, show };