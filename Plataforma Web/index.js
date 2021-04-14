const express = require('express'); //Carregar o módulo do express
const Stock = express(); // Importa o módulo do framework express para a aplicação Stock


Stock.get('/', function(req, res){ //Parametro para chamar a página do sistema
    res.sendFile(__dirname + '/index.html');
});

Stock.listen(8081, function(){
    console.log('Servidor executando na url: http://localhost:8081');
}); // Abertura do servidor. Essa deve ser a ultima linha do index.js