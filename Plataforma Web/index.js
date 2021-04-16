//Carregar os frameworks: Express, Handlebars, Sequelize
const express = require('express');
const Stock = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');


// Config
    // Tamplate Engine
    Stock.engine('handlebars', handlebars({defaultLayout: 'main'}));
    Stock.set('view engine', 'handlebars');
    // Conectar ao Banco de Dados
    const sequelize = new Sequelize('sistemastock', 'root', 'qaz@123', {
        host: "localhost",
        dialect: 'mysql'
    });



    
// Abertura do servidor. Essa deve ser a ultima linha do index.js
Stock.listen(8081, function(){
    console.log('Servidor executando na url: http://localhost:8081');
}); 