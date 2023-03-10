//---------Imports---------
const express = require('express')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')

const { uploader } = require('./utils/uploader')
const { dbConnection } = require('./config/connectionDB')
//---------Router----------
const indexRoute = require('./routes/index.router.js')
//---------DBconnection----
require('dotenv').config()
dbConnection()

//---------Sets------------
const app = express()
const PORT = 8080 || procces.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/virtual', express.static(__dirname + '/public'))

//--------seteo de plantillas-----------
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

//------------------------



app.use(indexRoute)




app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }
    console.log('servidor en', PORT);
})