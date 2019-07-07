const path = require('path');

module.exports = { registerRoutes };

function registerRoutes(app, express) {

	// Set up static file hosting
	app.use('/public', express.static(path.join(__dirname,'../../public')));
	console.info('[static.js][static] ' + path.join(__dirname,'../../public'));

}
