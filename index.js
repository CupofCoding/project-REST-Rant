
//Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override')

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Controllers & Routes
// code to import the router in'places.js'
// .use('sets all routes after /places controller,)
app.use('/places', require('./controllers/places'));

// homepage route path
app.get('/', (req,res) => {
    res.render('home');
});

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })

app.get('*', (req, res) => {
    // .status(404) linked to .send to call status response
    res.render('error404')
  });

app.listen(process.env.PORT)