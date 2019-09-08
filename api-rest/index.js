'use strict' //para funcionalidades ecmas6
//node no soporta import
const express = require('express')

const app = express()

const port = 3000

app.listen(port, ()=>{
	console.log(`corriendo en el puerto ${port}`)
})