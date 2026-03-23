const express = require('express');
const app = express();

const movieRouter = require('./routers/movieRouter');
const errorsHandlerMiddleware = require('./middlewares/errorsHandler');
const notFoundMiddleware = require('./middlewares/notFound');

app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Movies!')
});

app.use('/api/movies', movieRouter);

app.use(notFoundMiddleware);
app.use(errorsHandlerMiddleware);

app.listen(process.env.APP_PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.APP_PORT}`)
});
