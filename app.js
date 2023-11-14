const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const app= express()

app.set('view engine', 'ejs') //Seteamos el motor vistas
app.use(expressLayouts) //Se asigna que use la variable que contiene los Layouts 

app.use(express.static(path.join(__dirname, 'public')))

//Utilizar el router para la vista principal y evitar codigo spagetti
const router = require('./routes/router')
app.use(router.routes)

//Obtener los datos y entregar los encabezados html
//app.get('/', (_req, res)=>{
  //  res.send('Dashboard usando NodeJs')
//})
//Función para runnear el servidor 
app.listen(3001, ()=>{
    console.log('Server up running in http://localhost:3001')
})



app.listen(3000,()=>{
    console.log('server up is running in http://localhost:3001')
})

//Si sucede error 404
app.use((_req, res, _next) => {
    res.status(404).render('404', {title: 'Page Not Found'})
})

//Global error handling middle