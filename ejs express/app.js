const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
    // express app
const app = express();
//connect to mongodb
const dbURI = 'mongodb+srv://filipeufc:cromice123@mydatabasetest.pifgg.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('conected to db'))
    .catch((err) => console.log(err));
// register vue engine

app.set('view engine', 'ejs');

// if i needed view engine to check for the html files :
// app.set('views', 'myvies');
// listen for requests

app.listen(3000);

// middleware & static files
// this one is the folder avaliable to the browser. so i can use localhost:3000/styles.css etc
app.use(express.static('public'));

//using morgan - outcome after reload "GET /blogs/Create 304 13.411 ms" there are a lot of options.
app.use(morgan('dev'));


// creating middleware, need to use next otherwise it would not keep going down - top-bottom we will delte and start using morgan package so i will keep it comment.
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     next();

// });

// just to show how it works - commented since we are using morgan now.
// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();

// });

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'lorem ipsum bla bla bla bla bla bla bla' },
        { title: 'Mario finds stars', snippet: 'lorem ipsum bla bla bla bla bla bla bla' },
        { title: 'How to defeat browser', snippet: 'lorem ipsum bla bla bla bla bla bla bla' },

    ];
    //res.send('<p> HomePage </p>');
    res.render('index', { title: 'Home', blogs });

})


app.get('/about', (req, res) => {
    //res.send('<p> AboutPage </p>');
    res.render('about', { title: 'About' });
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
})




// 404 app.use middleware

app.use((req, res) => {
    res.status(404).render('404', { title: 'Error' });
})