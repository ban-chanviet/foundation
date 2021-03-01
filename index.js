const express = require('express')
const routeHome = require('./controller/getHomePage')
const path = require('path')
const app = express()



app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', routeHome.getHome)
console.log('hello')

app.listen(process.env.PORT || 3000)