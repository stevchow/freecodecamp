const express = require('express');
const mongoose = require('mongoose');
const server = express();
const root = process.cwd();
const url_controller = require('./controllers/url');
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/urlshortener");

server.use('/public', express.static(root + '/public'));

server.post('/api/shorturl/:url', url_controller.add_url);

server.get('/api/shorturl/:url', url_controller.fetch_url);

server.delete('/api/shorturl/:url', url_controller.delete_url);

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(port, () => {
    console.log("Listening on port "+port);
});