const path = require('path');

module.exports = { registerRoutes };

function registerRoutes(app, express) {

	// Serve the preact app staticically
	app.use('/', express.static(path.join(__dirname,'../../build')));
	console.info('[pwa.js][static] ' + path.join(__dirname,'../../build'));


	// every other route will go to the single page preact app
	app.get(['/', '/about','/files'], (req, res) => {
		console.info('serving static PWA');
		res.sendFile(path.resolve(__dirname, '../../build/index.html'));
	});
	console.info('[pwa.js][SPA] /      => ' + path.resolve(__dirname, '../../build/index.html'));
	console.info('[pwa.js][SPA] /about => /');
	console.info('[pwa.js][SPA] /files => /');

}
