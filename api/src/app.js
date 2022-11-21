const express=require('express')
const morgan= require('morgan')
const cors = require('cors')
const routes= require('./routes/index.js')
const path= require('path')

const PORT= process.env.PORT || 3001

const app=express()

app.use(express.static(path.join(__dirname, 'dbImages')))
app.use(morgan('dev'))
app.use(cors())
app.use(express.json()); //Si recibe un body, convierte a json
app.use('/',routes); 

module.exports= app