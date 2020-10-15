const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const Blog = require('./models/blog');
// express app
const app = express();
//connect to mongodb
const dbURI = 'mongodb+srv://filipeufc:Cromice123@mydatabasetest.pifgg.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
// register vue engine

app.set('view engine', 'ejs');

// if i needed view engine to check for the html files :
// app.set('views', 'myvies');
// listen for requests



// middleware & static files
// this one is the folder avaliable to the browser. so i can use localhost:3000/styles.css etc
app.use(express.static('public'));

//using morgan - outcome after reload "GET /blogs/Create 304 13.411 ms" there are a lot of options.
app.use(morgan('dev'));

// mongoose and morgan sandbox routes
app.get('/add-blog', (req, res) => {

    const blog = new Blog({
        title: 'new blog 2',
        snippet: ' about my new blog',
        body: 'more about my new blog'
    });
    // this is to save in the database. it is an async so it takes some time to end
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/all-blogs', (req, res) => {
    // we use the model "blog" and the method find to get all blogs
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/single-blog', (req, res) => {
    // i go to all blogs and copy the id of the first blog
    Blog.findById('5f8827b52d4d72376caef78a')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})


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