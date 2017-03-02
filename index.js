// import file system
var fs = require('fs');

// import our auto json reloader
var autoJson = require('./Scripts/autoReloadJson');

// import express
var express = require('express');
var app = express();

// Stops info about our server being sent in http headers
app.disable('x-powered-by');

// Set up handlebars
var exphbs = require('express-handlebars');

// Set up for markdown
var marked = require('marked');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

// Set port
app.set('port', process.env.PORT || 3000);

// Set up static file hosting
app.use(express.static(__dirname + '/Public'))

/*
* Routes
*/
// log which routes are being visited
app.use(function(req,res,next){
    var d = new Date();
    var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(datestring + "\t>>>\t" + ip + " requested [" + req.url + "]");
    next();
});

// Home page
app.get('/',function(req,res){

    var pageJson =
    {
        "site" : autoJson.getJson("Data/site.json"),
        "home" : autoJson.getJson('Data/home.json')
    };

    res.render('home', pageJson);
});

// About page
app.get('/about',function(req,res){

    var mddata = marked(fs.readFileSync("Data/about.md").toString('utf8'));

    var pageJson =
    {
        "site"  : autoJson.getJson("Data/site.json"),
        "post" : {
            "markdown" : mddata
        }
    };

    res.render('post', pageJson);
});



// Redirect to /blog to blog.zakwest.tech
app.get('/blog', function(req,res){
    return res.redirect(303, "https://blog.zakwest.tech");
});

// 404 page
app.use(function(req,res){
    res.type('text/html');
    res.status(404);

    var pageJson =
    {
        "site" : autoJson.getJson("Data/site.json"),
        "error" : {
            "code": "404",
            "name" : "Page not found",
            "desc" : "We were not able to find the page you were looking for, sorry!"
        }
    };

    res.render('error', pageJson);
});

// 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);

    res.type('text/html');
    res.status(500);

    var pageJson =
    {
        "site" : autoJson.getJson("Data/site.json"),
        "error" : {
            "code": "500",
            "name" : "Server error",
            "desc" : "We experienced an unexpected error and were unable to retrive the page you were looking for."
        }
    };

    res.render('error', pageJson);
});

// Set up listing
app.listen(app.get('port'), function(){
    console.log("Express started in http://localhost:" + app.get('port'));
});
