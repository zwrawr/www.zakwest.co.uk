// import express
var express = require('express');
var app = express();

// Stops info about our server being sent in http headers
app.disable('x-powered-by');

// Set up handlebars
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('veiw engine','handlebars');

// Set port
app.set('port', proccess.env.PORT || 3000);

// Set up static file hosting
app.use(express.static(__dirname + '/public'))

// Routes
