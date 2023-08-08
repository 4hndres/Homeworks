const express = require('express')
const hbs = require('hbs');
require('dotenv').config()
const app = express()
const port = process.env.PORT


// handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {name: 'Andie', title: 'Bleeding Image'})
})

app.get('/elements', (req, res) => {
    res.render('elements', {name: 'Andie', title: 'Bleeding Image'})
})

app.get('/generic', (req, res) => {
    res.render('generic', {name: 'Andie', title: 'Bleeding Image'})
})

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname+'/public/elements.html')
// })

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname+'/public/generic.html')
// })

app.get('*', function (req, res) {
    res.send('404 | page not found')
})

app.listen(port, () => {
    console.log(`Listening port ${port}`)
})