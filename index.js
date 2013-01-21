var http = require('http'),
    express = require('express');

var app = express(),
    server = http.createServer(app),
    port = +(process.argv[2]);


if (!port) {
  console.error("Please specify the port no to start in");
  process.exit();
}

app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/static'));
app.use(express.favicon());


// Routes

server.listen(port, function startServer() {
  console.log('Server listening on port %d in %s mode', server.address().port, app.settings.env);
});