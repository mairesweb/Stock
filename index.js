const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParse = require('body-parser')
const cadastroProdutos = require('./models/Cadastros')

// Config
    // Tamplate Engine. Avisando o nodejs que usaremos o handlebars como tamplate engine.
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    
    // Body-Parser
        app.use(bodyParse.urlencoded({extended: false}))
        app.use(bodyParse.json())
//

// Rotas do site

    // Rota página de login
        app.get('/login', function(req, res){
            res.render('login')
        })
    //

    // Rota página inicial
        app.get('/', function(req, res){
            res.send('Página inicial')
        })
    //

    // Rotas página de cadastros
        // Cadastro de clientes
            app.get('/cadastros/clientes', function(req, res){
                res.send('Cadastro de Clientes')
            })
        //

        // Cadastro de Funcionários
            app.get('/cadastros/funcionarios', function(req, res){
                res.send('Cadastro de Funcionários')
            })
        //

        // Cadastro de Produtos
            app.get('/cadastros/produtos', function(req, res){
                res.render('cadastroProdutos')
            })
            // Preenchimento do formulário
                app.post('/cadastro/status', function(req, res){
                    cadastroProdutos.create({
                        nome_produto: req.body.nome_produto,
                        qntd_produto: req.body.qntd_produto,
                        descricao_produto: req.body.descricao_produto,
                        preco: req.body.preco,
                        referencia_produto: req.body.referencia_produto,
                    }).then(function(){
                        res.send('Cadastro realizado com sucesso!')
                    }).catch(function(erro){
                        res.send('Erro ao realizar o cadastro. Relatório do erro: '+ erro)
                    })
                })
                
        //
    //
//





// Abertura do servidor. Essa deve ser a ultima linha do index.js
    app.listen(8081, function(){
        console.log('Servidor executando na url: http://localhost:8081')
    })
//
