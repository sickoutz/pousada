var readline = require("readline-sync");

var opcao;
exports.opcao = opcao;

var cod;
exports.cod = cod;

var login;

var opcao2

var senha;

var tent = 3;

console.log("===========================================================");
console.log("|                         Login                           |");
console.log("===========================================================");
console.log("|                                                         |");
login = readline.question("                       Login: ")



while (login != "admin")
{
 console.log("Login inválido, tente novamente: ");
 login = readline.question("                       Login: ");
}


senha = readline.question("                       Senha: ", {hideEchoBack: true });
while (senha != "admin")
{
if (tent<=0)
 {
console.log("Tente novamente com outro usuário!")
console.log("|                                                         |");
console.log("===========================================================");
process.exit()
 }
else
 {
console.log("Senha inválida! \nRestam " + tent + " tentativas");

tent--
senha = readline.question("                       Senha: ");

 }
}

console.log("|                                                         |");
console.log("===========================================================");
 
do 
{
console.log("===========================================================");
console.log("|                   Menu Principal                        |");
console.log("===========================================================");
console.log("|                  1-  Aluguel                            |");
console.log("|                  2-  Quartos                            |");
console.log("|                  3-  Serviços                           |");
console.log("|                  4-  Sair                               |");
console.log("===========================================================");
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
console.log("===========================================================");
console.log("|                        Aluguel                          |");
console.log("===========================================================");
console.log("|                1- Aluguel de Quartos                    |");
console.log("|                2- Disponibilidade de Quarto             |");
console.log("|                3- Cancelar Quarto                       |");
console.log("|                4- Retornar ao Menu Principal            |");
console.log("===========================================================");
            opcao2 = readline.question("");
            
            if (opcao2 == 1)

{
    console.log("===========================================================");
    console.log("|                                                         |");

    cod = readline.question("|              Digite o código do quarto: ");

                    do
                    {
                        if (cod == "123") /* trocar essa condição pra ver se consta no sistema, usando SQL (lembrar de converter de numero do SGBD pra string aqui no codigo)*/ 
                            {
                            cod = readline.question("|              já está em uso, tente novamente!: ");
                            
                            }

                        else if (cod.length != 3) 
                            {
                            cod = readline.question("Este número é inválido, tente novamente! \n\n");
                            console.log("|                                                         |");
console.log("===========================================================");
                            }
                    }
                while (cod.length != 3 || cod == "123"); /**/
                /* comando que efetua o cadastro*/
               
              
                console.log("|                                                         |");
                console.log("===========================================================");
                console.log("|                                                         |");
                console.log("|              Reserva feita com sucesso!                 |");
                console.log("|                                                         |");
                console.log("|                                                         |");
                console.log("===========================================================");
                break;
}

                else if (opcao2 == 2) 
{
    console.log("===========================================================");
    console.log("|                                                         |");

    cod = readline.question("|              Digite o código do quarto: ");
               do
                    {
                        if (cod == "123") /* trocar essa condição pra ver se NÃO consta no sistema, usando SQL (lembrar de converter de numero do SGBD pra string aqui no codigo)*/ 
                            {
                                cod = readline.question("|              não está em uso, tente novamente!: ");
                            
                            }

                        else if (cod.length != 3)
                            {
                                cod = readline.question("Este número é inválido, tente novamente! \n\n");
                                console.log("|                                                         |");
    console.log("===========================================================");
                            }
                        else 
                            {
                console.log("|                                                         |");
                            } 
                    }
                while (cod.length != 3 || cod == "123");  
                 /* comando remove em sql*/
                console.log("|                                                         |");
                console.log("===========================================================");
                console.log("|                                                         |");
                console.log("|            Reserva CANCELADA com sucesso!               |");
                console.log("|                                                         |");
                console.log("|                                                         |");
                console.log("===========================================================");
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
