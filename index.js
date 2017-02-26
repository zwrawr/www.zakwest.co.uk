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
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
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
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip + " acessed " + req.url);
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

    var pageJson =
    {
        "site"  : autoJson.getJson("Data/site.json"),
        "about" : autoJson.getJson('Data/about.json')
    };

    res.render('about', pageJson);
});



// Redirect to /blog to blog.zakwest.tech
app.get('/blog', function(req,res){
    return res.redirect(303, "https://blog.zakwest.tech");
});

// 404 page
app.use(function(req,res){
    res.type('text/html');
    res.status(404);
    res.render('404');
});

// 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);

    res.type('text/html');
    res.status(500);
    res.render('500');
});

// Set up listing
app.listen(app.get('port'), function(){
    console.log("Express started in http://localhost:" + app.get('port'));
});
