const { response } = require('express');
const express = require('express');

// express app
const app = express();

// register vue engine

// app.set('view engine', 'ejs');

// if i needed view engine to check for the html files :
// app.set('views', 'myvies');
// listen for requests

app.listen(3000, );

app.get('/', (req, res) => {
    //res.send('<p> HomePage </p>');
    res.sendFile('./views/index.html', { root: __dirname });
})


app.get('/about', (req, res) => {
    //res.send('<p> AboutPage </p>');
    res.sendFile('./views/about.html', { root: __dirname });
})


// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 app.use middleware

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})