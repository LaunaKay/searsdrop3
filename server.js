var express = require('express');
var app = express();

var server = app.listen(8888, function()
{
    console.log("Express server listening on port 8888");
});

// Sockets
io = require('socket.io').listen(server)

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Session
var session = require('express-session')
app.use(session({
  secret: 'petunia pug',
  resave: false,
  saveUninitialized: true
}));


app.use(express.static(__dirname + '/client'))

// Mongoose
require('./server/config/mongoose.js');

// HTTP Routes`
require('./server/config/routes.js')(app);

// Socket Routes
// require('./server/config/socket.routes.js')(app);



