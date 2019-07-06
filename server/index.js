

console.info('\n=> WWW.ZAKWEST.TECH \n\n');
console.info('[index.js][__dirname] :' + __dirname);

// setup file watch
const FolderWatch = require('./utils/folderWatch');
const watch = new FolderWatch('./public/files', './public/data/files.json');
watch.update();

// import express
const express = require('express');
const app = express();

//import path
const path = require('path');

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

// Set up static file hosting
app.use('/public', express.static(path.join(__dirname,'../public')));
console.info('[index.js][static] ' + path.join(__dirname,'../public'));

// Serve the preact app staticically
app.use(express.static(path.join(__dirname,'../build')));
console.info('[index.js][static] ' + path.join(__dirname,'../build'));

// Redirect to /blog to blog.zakwest.tech
app.get('/blog', (req,res) => (
	 res.redirect(303, 'https://blog.zakwest.co.uk')
));

// Redirect to /page/about and /page/contact to /about
app.get(/^\/page\/(about|contact)\/?/, (req,res) => (
	res.redirect(303, '/about')
));

// every other route will go to the single page preact app
app.get(['/about','/files'], (req, res) => {
	console.info('serving static PWA');
	res.sendFile(path.resolve(__dirname, 'build/index.html'));
});


// Set up listing
app.listen(
	app.get('port'), () => (
		console.info('Express started in http://localhost:' + app.get('port'))
	)
);
