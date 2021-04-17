INSERT INTO clientes(nomeCliente, emailCliente, telefoneCliente) VALUE(
    "Dudu Fernandes",
    "duduwlf@gmail.com",
    "77988267655"
);


create table clientes(
    nomeCliente varchar(80),
    emailCliente varchar(50),
    telefoneCliente varchar(14)
);

Descrever tablea -> DESCRIBE nome_da_tabela;
Inserir dados -> INSERT nome_da_tabela(colunas_da_tabela) VALUES (
  ESCREVA AQUI OS DADOS
);
Limpar tela \! cls
Deletar uma tabela -> DROP TABLE nome_da_tabela;

//Listagem de dados
// * é para selecionar todos os dados

SELECT * FROM clientes;

SELECT * FROM clientes WHERE emailCliente = "duduwlf@gmail.com";
SELECT * FROM clientes WHERE idadeCliente >= 18;


//NUCA EXECUTE O COMANDO DELETE E SET SEM O WHERE!!!!!!!
//deletar um registro nas tabelas
DELETE FROM clientes WHERE nomeCliente = "jairo"; 

//atualizar dados na tabela
UPDATE clientes SET emailCliente = "teste@teste.com" WHERE emailCliente = "irinei@ciclano.gov.br";

UPDATE clientes SET nomeCliente = "Dudu Fernandes" WHERE nomeCliente = "Ciclano dos Fulanos dos Abreu", SET telefoneCliente = "77988267655" WHERE telefoneCliente = "40028922";