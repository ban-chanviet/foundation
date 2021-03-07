const express = require('express')
const route = require('./controller/getPage')
const path = require('path')
const app = express()



const googleDriveUploader = require('./controller/driveUploader')
const fileUpload = require('express-fileupload');

const bodyParser = require('body-parser')


app.use(fileUpload());
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', route.getall)
app.post('/uploadcv', urlencodedParser, googleDriveUploader.googleDrive)


app.listen(process.env.PORT || 3000)