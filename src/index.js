// Import Library
const path = require('path')
const express = require('express')
// Tra ve doi tuong dai dien cho application
const  morgan = require('morgan')
const  handlebar = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))


app.use(morgan('combined'))
app.engine('hbs', handlebar.engine({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');

app.set('views',path.join(__dirname, 'resources', 'views') )


// console.log('PATH: ', path.join(__dirname, 'public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/tin-tuc', (req, res) => {
  res.render('new')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
