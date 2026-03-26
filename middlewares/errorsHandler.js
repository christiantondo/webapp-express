const errorsHandler = (err, req, res, next) => {

	console.error(err);

	res.status(500).json({
		error: `Server error: ${err.name}`,
		message: err.message
	});
};


module.exports = errorsHandler;