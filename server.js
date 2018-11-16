const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res, send) => {
	res.sendFile(__dirname + "/index.html");
});

app.get('/fonts/NexaBold.otf', (req, res, next) => {
	res.sendFile(__dirname + '/fonts/NexaBold.otf');
});

app.get('/fonts/NexaLight.otf', (req, res, next) => {
	res.sendFile(__dirname + '/fonts/NexaLight.otf');
});

app.get('/css/bootstrap.min.css', (req, res, next) => {
	res.sendFile(__dirname + '/css/bootstrap.min.css');
})

app.get('/loginSignup.html', (req, res, next) => {
	res.sendFile(__dirname + '/loginSignup.html');
})

app.get('/post.html', (req, res, next) => {
	res.sendFile(__dirname + '/post.html');
})

app.get('/firebase.js', (req, res, next) => {
	res.sendFile(__dirname + '/firebase.js');
})

app.get('/css/index.css', (req, res, next) => {
	res.sendFile(__dirname + '/css/index.css');
})

app.listen(PORT, () => {
	console.log("Listening on port " + PORT);
})