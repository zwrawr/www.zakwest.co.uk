console.info('\n=> WWW.ZAKWEST.TECH \n\n');
console.info('[index.js][__dirname] :' + __dirname);

// setup file watch
const FolderWatch = require('./utils/folderWatch');
const watch = new FolderWatch('./public/files', './public/data/files.json');
watch.update();

// import express
const express = require('express');
const app = express();

// Stops info about our server being sent in http headers
app.disable('x-powered-by');

// Set port
const port = process.env.port || 3000;
app.set('port', port);
console.info('[index.js][port] ' + port);

/*
* Routes
*/
// log which routes are being visited
app.use((req,res,next) => {
	let d = new Date();
	let datestring = d.getDate()  + '-' + (d.getMonth()+1) + '-' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes();

	let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.info('[' + datestring + ']\t' + ip + ' requested [' + req.url + ']');
	next();
});

require('./routes/static').registerRoutes(app, express);
require('./routes/redirects').registerRoutes(app, express);
require('./routes/pwa').registerRoutes(app, express);

// Set up listing
app.listen(
	app.get('port'), () => (
		console.info('Express started in http://localhost:' + app.get('port'))
	)
);
