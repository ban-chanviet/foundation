const express = require('express')
const route = require('./controller/getPage')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', route.getHome)
app.get('/uploadcv', route.upload)

app.listen(process.env.PORT || 3000)