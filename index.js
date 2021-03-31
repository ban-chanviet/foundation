const express = require('express')
const path = require('path')
const app = express()



const googleDriveUploader = require('./controller/driveUploader')
const fileUpload = require('express-fileupload')


app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', require(path.join(__dirname + '/routes/getPage')))
app.post('/uploadcv', googleDriveUploader.googleDrive)


app.listen(process.env.PORT || 3000)