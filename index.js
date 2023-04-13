const express = require('express')
const app = express()

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hola mundo!')
})

// Ruta de clientes
app.get('/clientes', (req, res) => {
  res.send('Hilari, Liam, Anguie')
})

// Ruta de productos
app.get('/productos', (req, res) => {
  res.send('Teclado, Parlante, Mouse')
})

// Puerto de escucha
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})