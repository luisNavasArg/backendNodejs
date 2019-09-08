'use strict' //para funcionalidades ecmas6
//node no soporta import
const express = require('express')
//importamos body-parser
const bodyParser = require('body-parser')


const app = express()
//añadimos el metodo body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const port = 3000

app.listen(port, ()=>{
	console.log(`corriendo en el puerto ${port}`)
})