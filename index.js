const express = require('express')
const Stock = express()
const handlebars = require('express-handlebars')


// Config
    // Tamplate Engine
    Stock.engine('handlebars', handlebars({defaultLayout: 'main'}))
    Stock.set('view engine', 'handlebars')
    
//




// Abertura do servidor. Essa deve ser a ultima linha do index.js
    Stock.listen(8081, function(){
        console.log('Servidor executando na url: http://localhost:8081')
    })
//
