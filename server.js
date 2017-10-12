var express = require('express');
var app = express();
var routes = require('./src/server/routes');
var path = require('path');

var PORT = process.env.PORT || 3000;

routes(app);

app.use(express.static(path.join(__dirname, 'dist')));

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});