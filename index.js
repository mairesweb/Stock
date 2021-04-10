const express = require('express') // Inicialização dos recursos da API Express
const morgan = require('morgan') // Inicialização dos recursos da API Morgan


const stock = express()
stock.use(morgan('dev'))
stock.use(express.json)

stock.listen(21262, () => {
    console.log(`Express started at http://localhost:21262`)
})