const express = require('express')
const handlebars = require('express-handlebars')

const createExcel = require('./createExcel')

const app = express()

const port = '8000'

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('home', data)
})

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
})
