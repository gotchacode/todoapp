var http = require('http'),
    express = require('express');

var app = express(),
    server = http.createServer(app);

app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/static'));
app.use(express.favicon());


// Routes
var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server listening on port 3000');
