const express = require('express');
const path = require('path');
const app = express();
const ejsMate = require('ejs-mate');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'))

//configure the app
app.use(express.json());
app.use(express.static('public'))
app.use('/img', express.static(__dirname + 'public/img'))

//Connection to Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://EOlaw146:Olawalee_.146@cluster0.4wv68hn.mongodb.net/Movies?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});
app.get('/home', function(req, res) {
  res.render('pages/home');
});
app.get('/tv-shows', function(req, res) {
    res.render('pages/tv-shows');
});
app.get('/movies', function(req, res) {
    res.render('pages/movies');
});
app.get('/new-and-popular', function(req, res) {
  res.render('pages/new-and-popular');
});
app.get('/my-list', function(req, res) {
  res.render('pages/my-list');
});
app.get('/browse-by-languages', function(req, res) {
  res.render('pages/browse-by-languages');
});
app.get('/login-register', function(req, res) {
  res.render('pages/login-register');
});




// server starting
app.listen(2000, (req, res) => {
    console.log('listening on port 2000.....')
})