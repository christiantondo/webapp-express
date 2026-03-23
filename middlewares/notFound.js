const notFound = (req, res) => {
	res.status(404).json({
		error: 'Not found',
		message: 'Resource not available'
	});
};

module.exports = notFound;