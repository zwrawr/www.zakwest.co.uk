
module.exports = { registerRoutes };

function registerRoutes(app) {

	// Redirect to /page/about and /page/contact to /about
	app.get(/^\/page\/(about|contact)\/?/, (req,res) => (
		res.redirect(303, '/about')
	));
	console.info('[redirects.js][redirect] /page/about   ==> /about');
	console.info('[redirects.js][redirect] /page/contact ==> /about');

	// Redirect to /blog to blog.zakwest.tech
	app.get('/blog', (req,res) => (
		res.redirect(303, 'https://blog.zakwest.co.uk')
	));
	console.info('[redirects.js][redirect] /blog         ==> blog.zakwest.co.uk');

}
