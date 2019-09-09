'use strict' //para funcionalidades ecmas6
//node no soporta import
const express = require('express')
//importamos body-parser
const bodyParser = require('body-parser')


const app = express()
// variable para el puerto 
const port = process.env.PORT || 3000
//añadimos el metodo body parser
app.use(bodyParser.urlencoded({extended:false}))
// instalar json formster
app.use(bodyParser.json())
//uso del metodo get com parametros
// app.get('/hola/:nombre',(req,res)=>{
// 	res.send({mensaje:`Estas en el servidor ${req.params.nombre}`});
// })
//verbos para la apirest full
//uso del metodo get com parametros
app.get('/api/productos',(req,res)=>{
	res.status(200).send({productos:[]})
})

app.get('/api/productos:productoId',(req,res)=>{
		
})
app.post('/api/productos',(req,res)=>{
	console.log(req.body)
	res.status(200).send({mensaje:'producto recibido'})	
})
app.put('/api/productos:productoId',(req,res)=>{
		
})
app.delete('/api/productos:productoId',(req,res)=>{
		
})
app.listen(port, ()=>{
	console.log(`corriendo en el puerto ${port}`)
})