const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();


hbs.registerPartials( __dirname + '/views/partials');

app.set('view engine', 'hbs');


// middleware
app.use( express.static( 'public' ));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Juan Camilo Clavijo',
    curso: 'Node de cero a experto'
  });
})

app.get('/hola-mundo', (req, res) => {
  res.send('Hello World')
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Juan Camilo Clavijo',
    curso: 'Node de cero a experto'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Juan Camilo Clavijo',
    curso: 'Node de cero a experto'
  });
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(process.env.PORT)