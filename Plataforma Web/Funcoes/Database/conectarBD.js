// Arquivo para se conectar ao banco de dados mysql utilizando o Sequelize

const Sequelize = require('sequelize'); // Criação do método para utilizar o sequelize

// Inserção dos dados para conexão com o mysql
const sequelize = new Sequelize('sistemastock', 'root', 'qaz@123', {
    host: "localhost",
    dialect: 'mysql'
})

//verificar a conexão com o DB
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso à base de dados!')
}).catch(function(erro){
    console.log('Falha ao conectar a base de dados. Erro: ' + erro)
})