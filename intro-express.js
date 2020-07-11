const express = require('express')
 
const app = express()
 
app.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'HOLA PERROS DESDE  GETEXPRESS!!!!'
    }) //fin del json
}) 
 
app.post('/', (request, response) => {
    response.json({
        success: true,
        message: 'HOLA PERROS DESDE  POST EXPRESS!!!!'
    }) //fin del json
}) 
 
app.listen(8080, () => {
    console.log('SERVER IS LISTENING')
})