var readline = require("readline-sync");

var opcao;
exports.opcao = opcao;

var cod;
exports.cod = cod;

var login;

var opcao2

var senha;

var tent = 3;

login = readline.question("Login: \n")
while (login != "admin")
{
 console.log("Login inválido, tente novamente: ");
 login = readline.question("")
}


senha = readline.question("Senha: \n" , {hideEchoBack: true });
while (senha != "admin")
{
if (tent<=0)
 {
console.log("Tente novamente com outro usuário!")
process.exit()
 }
else
 {
console.log("Senha inválida! \nRestam " + tent + " tentativas");
tent--
senha = readline.question("")
 }
console.log(" ")
}


 
do 
{
    console.log("Escolha uma opção: ")
    console.log("1- Menu de aluguel ")
    console.log("2- Menu de quartos ")
    console.log("3- Serviços gerais ");
    console.log("4- Sair")
    opcao = readline.questionInt()

}
while(opcao != 4 && opcao!=3 && opcao!=2 && opcao!=1)

if (opcao == 4) {
    console.log("Obrigado pela escolha!");
    process.exit();
}

else {

    switch (opcao) {
        case 1:
            console.log("Escolha uma opção: ");
            console.log("1- Reservar quarto ");
            console.log("2- Cancelar reserva ");
            console.log("3- Modificar reserva ");
            console.log("4- Sair  ");
            opcao2 = readline.question("");
            
            if (opcao2 == 1)

{
                cod = readline.question("Digite o código do quarto: \n");

                    do
                    {
                        if (cod == "123") /* trocar essa condição pra ver se consta no sistema, usando SQL (lembrar de converter de numero do SGBD pra string aqui no codigo)*/ 
                            {
                            cod = readline.question("Este quarto já está em uso, tente novamente! \n\n");
                            }

                        else if (cod.length != 3) 
                            {
                            cod = readline.question("Este número é inválido, tente novamente! \n\n");
                            }
                    }
                while (cod.length != 3 || cod == "123"); /**/
                /* comando que efetua o cadastro*/
                console.log("Reserva feita com sucesso!");
                break;
}

                else if (opcao2 == 2) 
{
            cod = readline.question("Digite o código do quarto \n");
               do
                    {
                        if (cod == "123") /* trocar essa condição pra ver se NÃO consta no sistema, usando SQL (lembrar de converter de numero do SGBD pra string aqui no codigo)*/ 
                            {
                            cod = readline.question("Este quarto não está reservado! tente novamente \n\n");
                            }

                        else if (cod.length != 3)
                            {
                            cod = readline.question("Este número é inválido, tente novamente! \n\n");
                            }
                    }
                while (cod.length != 3 || cod == "123");  
                 /* comando remove em sql*/
                 console.log("Reserva cancelada com sucesso!");
                 break;
}
                else if (opcao2 == 3)
{
                    cod = readline.question("Digite o código do quarto para modificar a reserva: \n");
                    do
                         {
                            if (cod == "123")
                            {
                                cod = readline.question("Este quarto não está reservado! tente novamente \n\n");
                            }  
                            
                            
                            else if (cod.length != 3) 
                                 {
                                 cod = readline.question("Este número é inválido, tente novamente! \n\n");
                                 }
                                 
                         }
                     while (cod.length != 3 || cod == "123");  
                      /* comando update sql*/
                      console.log("Reserva modificada com sucesso!");
                      break;
}
                else if (opcao2 == 4)
{
                console.log("Obrigado pela escolha!");
                process.exit();
}
                

        case 2:
            break;

        case 3:
            break;
    }












    }


