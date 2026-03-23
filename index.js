const express = require('express');
const app = express();
const port = 3000;

const errorsHandlerMiddleware = require('./middlewares/errorsHandler');
const notFoundMiddleware = require('./middlewares/notFound');

app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello Movies!')
});

app.use(notFoundMiddleware);
app.use(errorsHandlerMiddleware);

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`)
});
