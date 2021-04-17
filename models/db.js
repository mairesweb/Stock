// Conectar ao Banco de Dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize('stockdb', 'root', 'qaz@123', {
    host: "localhost",
    dialect: 'mysql'
})

// Exportar os métodos Sequelize para conexão do banco de dados em outros módulos
    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }
//