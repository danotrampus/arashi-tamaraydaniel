var express = require('express'),
    path = require('path'),
    app = express();

var serverPort = process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(serverPort, function () {
    console.log('App listening on port ' + serverPort);
});