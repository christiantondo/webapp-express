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

}

module.exports = { index, show };