// import file system
var fs = require('fs');

// import our auto json reloader
var autoJson = require('./Scripts/autoReloadJson');

require('./Scripts/FilesWatch').registerWatch();

// import express
var express = require('express');
var app = express();

// Stops info about our server being sent in http headers
app.disable('x-powered-by');

// Set up handlebars
var exphbs = require('express-handlebars');

// Set up for markdown-it
var container = require("markdown-it-container");
var highlight = require("markdown-it-highlightjs");

var md = require('markdown-it')
    ({
        html:         true,
        breaks:       true,
        langPrefix:   'lang-',
        linkify:      true,
        typographer:  true,
        quotes: '“”‘’'
    })
    .use(container, "right")
    .use(container, "left")
    .use(highlight);

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir:'Built/Views/Layouts',
    partialsDir:'Built/Views/Partials'
}));
app.set('view engine','handlebars');
app.set('views',__dirname + '/Views');

// Set port
app.set('port', process.env.PORT || 3000);

// Set up static file hosting
app.use(express.static(__dirname + '/Public'));

console.log(__dirname);

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
        "site" : autoJson.getJson("Built/Data/site.json"),
		"home" : autoJson.getJson('Built/Data/home.json'),
		"head" : {
			"title" : "Home",
			"desc" : "Homepage for Zak West see all the places you can find me on the web"
		}
    };

    res.render('home', pageJson);
});

// Files page
app.get('/files',function(req,res){

    var pageJson =
    {
        "site" : autoJson.getJson("Built/Data/site.json"),
		"files" : autoJson.getJson('Built/Data/files.json'),
		"head" : {
			"title" : "Downloads",
			"desc" : "Download files from Zak West"
		}
    };

    res.render('files', pageJson);
});

// About page
app.get('/pages/:page',function(req,res,next){

    var pages = autoJson.getJson("Built/Data/pages.json");
    var exists = false;
    var index = -1;
    for (var i in pages.pages){
        if (pages.pages[i].name == req.params.page){
            exists = true;
            index = i;
            break;
        }
    }

    if(!exists)
    {
        // That page does exists
        next();
        return;
    }

    var mddata = md.render(fs.readFileSync("Built/"+pages.pages[i].filepath).toString('utf8'));

    var pageJson =
    {
        "site"  : autoJson.getJson("Built/Data/site.json"),
        "post" : {
            "markdown" : mddata
		},
		"head" : {
			"title" : req.params.page + " page",
			"desc" : req.params.page + " page"
		}
    };

    res.render('post', pageJson);
});

// Redirect to /blog to blog.zakwest.tech
app.get('/blog', function(req,res){
    return res.redirect(303, "https://blog.zakwest.co.uk");
});

// 404 page
app.use(function(req,res){
    res.type('text/html');
    res.status(404);

    var pageJson =
    {
        "site" : autoJson.getJson("Built/Data/site.json"),
        "error" : {
            "code": "404",
            "name" : "Page not found",
            "desc" : "We were not able to find the page you were looking for, sorry!"
		},
		"head" : {
			"title" : "404",
			"desc" : "Page not Found, Code 500"
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
        "site" : autoJson.getJson("Built/Data/site.json"),
        "error" : {
            "code": "500",
            "name" : "Server error",
            "desc" : "We experienced an unexpected error and were unable to retrive the page you were looking for."
		},
		"head" : {
			"title" : "500",
			"desc" : "Server Error, Code 500"
		}
    };

    res.render('error', pageJson);
});

// Set up listing
app.listen(app.get('port'), function(){
    console.log("Express started in http://localhost:" + app.get('port'));
});

