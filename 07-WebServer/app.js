const express = require('express')
const app = express()
require('dotenv').config();

const port = process.env.PORT;
var hbs = require('hbs');


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Hector Ramirez',
        titulo: 'Curso node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Hector Ramirez',
        titulo: 'Curso node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Hector Ramirez',
        titulo: 'Curso node'
    });
});


app.get('*', (req, res) => {
    res.send('404 | Page not found');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
