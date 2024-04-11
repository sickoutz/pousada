var readline = require("readline-sync");

var opcao;
exports.opcao = opcao;

var gar

do {
opcao = readline.questionInt("Digite um número válido: \n 1: cadastrar cliente \n 2: excluir cliente \n 3: visualizar cliente \n\n ")
}
while(opcao != 1 && opcao != 2 && opcao != 3 );
var readline = require("readline-sync");

switch (opcao) {
    case 1:
        cpf = readline.question("Digite o cpf do cliente: \n\n");

        do {
            if (cpf == "12345678910") /* trocar essa condição pra ver se consta no sistema, usando SQL (lembrar de converter de numero do SGBD pra string aqui no codigo)*/
            {
                cpf = readline.question("Este cpf já está cadastrado em nosso sistema, tente novamente! \n");
            }
    
            else if (cpf.length != 11)
            {
                cpf = readline.question("Este número de cpf é inválido!, tente novamente! \n\n")
            }
        }
        while ( cpf.length != 11 || cpf == "12345678910" /* trocar essa condição pra ver se consta no sistema, usando SQL*/ )
        
        /* comando que envia o número do cpf para a tabela*/
        console.log("Cliente cadastrado com sucesso!")

}
