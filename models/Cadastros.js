// Chamada do módulo db.js pra que possa conectar ao banco de dados.
const db = require('./db')

// Contrução de modelo de tabelas
    // Clientes
    const cadastro_clientes = db.sequelize.define('cadastro_clientes', {
        nome: {
            type: db.Sequelize.STRING
        },
        email: {
            type: db.Sequelize.STRING
        },
        telefone: {
            type: db.Sequelize.INTEGER
        },
        cpf: {
            type: db.Sequelize.INTEGER
        },
        cnpj: {
            type: db.Sequelize.INTEGER
        },
        endereco: {
            type: db.Sequelize.STRING
        },
        cep: {
            type: db.Sequelize.INTEGER
        },
        numResidencia: {
            type: db.Sequelize.STRING
        },
        bairro: {
            type: db.Sequelize.STRING
        },
        cidade: {
            type: db.Sequelize.STRING
        },
        uf: {
            type: db.Sequelize.STRING
        },
        complemento: {
            type: db.Sequelize.STRING
        },
        referencia: {
            type: db.Sequelize.STRING
        },
    })
    // Funcionários
    const cadastro_funcionarios = db.sequelize.define('cadastro_funcionarios', {
        nome: {
            type: db.Sequelize.STRING
        },
        email: {
            type: db.Sequelize.STRING
        },
        telefone: {
            type: db.Sequelize.INTEGER
        },
        cpf: {
            type: db.Sequelize.INTEGER
        },
        endereco: {
            type: db.Sequelize.STRING
        },
        cep: {
            type: db.Sequelize.INTEGER
        },
        numResidencia: {
            type: db.Sequelize.STRING
        },
        bairro: {
            type: db.Sequelize.STRING
        },
        cidade: {
            type: db.Sequelize.STRING
        },
        uf: {
            type: db.Sequelize.STRING
        },
        complemento: {
            type: db.Sequelize.STRING
        },
        referencia: {
            type: db.Sequelize.STRING
        },
        usuario: {
            type: db.Sequelize.STRING
        },
        senha: {
            type: db.Sequelize.STRING
        },
        fazLogin: {
            type: db.Sequelize.BOOLEAN
        },
    })
    // Produtos
    const cadastro_produtos = db.sequelize.define('cadastro_produtos', {
        nome_produto: {
            type: db.Sequelize.STRING
        },
        qntd_produto: {
            type: db.Sequelize.FLOAT
        },
        descricao_produto: {
            type: db.Sequelize.TEXT
        },
        preco: {
            type: db.Sequelize.FLOAT
        },
        referencia_produto: {
            type: db.Sequelize.STRING
        },
    })
//


/* Trecho que cria as tabelas. Apagar ou comentar linhas após a criação!!!
    cadastro_clientes.sync({force: true})
    cadastro_produtos.sync({force: true})
    cadastro_funcionarios.sync({force: true})
    */
   
// Exportar tabelas para acesso em outros modulos.
    module.exports = cadastro_clientes
    module.exports = cadastro_funcionarios
    module.exports = cadastro_produtos
//

/* Registro inicial na tabela cadastro_funcionarios com o usuário administrador. Apagar ou comentar linhas após a criação!!!
    cadastro_funcionarios.create({
        nome: 'Administrador',
        usuario: 'admin',
        senha: '123',
        fazLogin: true
    })
*/


