let readline = require("readline-sync")
let opcao
let opcao2
let cod
let login
let senha
let tent = 3
let turn = true

function loginSenha(login, senha, tent)
{
console.log("===========================================================")
console.log("|                         Login                           |")
console.log("===========================================================")
console.log("|                                                         |")
login = readline.question("                       Login: ")



while (login != "admin")
{
 console.log("Login inválido, tente novamente: ")
 login = readline.question("                       Login: ")
}


senha = readline.question("                       Senha: ", {hideEchoBack: true })
while (senha != "admin")
{
if (tent<=0)
{
console.log("Tente novamente com outro usuário!")
console.log("|                                                         |")
console.log("===========================================================")
process.exit()
}
else
{
console.log("Senha inválida! \nRestam " + tent + " tentativas")

tent--
senha = readline.question("                       Senha: ")

}
}

console.log("|                                                         |")
console.log("===========================================================")
}





function menuPrincipal()
{
console.clear()
console.log("===========================================================")
console.log("|                   Menu Principal                        |")
console.log("===========================================================")
console.log("|                  1-  Aluguel                            |")
console.log("|                  2-  Quartos                            |")
console.log("|                  3-  Serviços                           |")
console.log("|                  4-  Sair                               |")
console.log("===========================================================")
}

function codigoCadastro()
{
    do
    {
    console.clear()
    console.log("===========================================================")
    console.log("|                        ...                              |")
    console.log("===========================================================")
    console.log("|                                                         |")
    console.log("|           Digite um código de quarto válido:            |")
    console.log("|                                                         |")
    console.log("|                                                         |")
    console.log("===========================================================")
    cod = readline.question("")
    }
    while (cod == "123" || cod.length != 3)
}




 

function menuAluguel(opcao2, cod)
{
let flag = false
opcao2 = 0
let thigas 
while (flag == false){
    switch (opcao2)
    {
    case 0:
        console.clear()
        console.log("===========================================================")
        console.log("|                        Aluguel                          |")
        console.log("===========================================================")
        console.log("|                1- Aluguel de Quartos                    |")
        console.log("|                2- Cancelar reserva                      |")
        console.log("|                3- Modificar reserva                     |")
        console.log("|                4- Retornar ao Menu Principal            |")
        console.log("===========================================================")
        opcao2 = readline.questionInt()
    
        break

    case 1:

                codigoCadastro(cod)             
                console.clear()
                console.log("===========================================================")
                console.log("|                        Sucesso!                         |")
                console.log("===========================================================")
                console.log("|                                                         |")
                console.log("|              Reserva feita com sucesso!                 |")
                console.log("|                                                         |")
                console.log("|                                                         |")
                console.log("===========================================================")
                thigas = readline.question("aperte enter para continuar...")
                opcao2 = 0
                break
                
    case 2:

                codigoCadastro(cod)

                console.clear()

                console.log("===========================================================")
                console.log("|                        Sucesso!                         |")
                console.log("===========================================================")
                console.log("|                                                         |")
                console.log("|            Reserva CANCELADA com sucesso!               |")
                console.log("|                                                         |")
                console.log("|                                                         |")
                console.log("===========================================================")
                thigas = readline.question("aperte enter para continuar...")
                opcao2 = 0
                break

    case 3:

                codigoCadastro(cod)

                console.clear()
                console.log("===========================================================")
                console.log("|                        Sucesso!                         |")
                console.log("===========================================================")
                console.log("|                                                         |")
                console.log("|            Reserva MODIFICADA com sucesso!              |")
                console.log("|                                                         |")
                console.log("|                                                         |")
                console.log("===========================================================")
                thigas = readline.question("aperte enter para continuar...")
                opcao2 = 0
                break    
                      

    case 4:
                flag = true
                break
}
}
}


                

function menuQuartos (opcao2, cod)
{
    let flag = false
    opcao2 = 0
    let thigas 
    
    
    while (flag == false){
            
                       
switch (opcao2)
{
                            
                case 0:
                console.clear()
                console.log("===========================================================")
                console.log("|                        Quartos                          |")
                console.log("===========================================================")
                console.log("|                1- Tipos de quartos                      |")
                console.log("|                2- Cadastrar quarto                      |")
                console.log("|                3- Excluir quarto                        |")
                console.log("|                4- Retornar ao Menu Principal            |")
                console.log("===========================================================")
                        opcao2 = readline.question("")      
                case 1:
                console.clear(
                )
                console.log("===========================================================")
                console.log("|                        Quartos                          |")
                console.log("===========================================================")
                console.log("|                                                         |")
                console.log("|                    Tipos de quarto                      |")
                console.log("|                                                         |")
                console.log("|                                                         |")
                console.log("===========================================================")
                thigas = readline.question("aperte enter para continuar...")
                opcao2 = 0
                            break 
                        
                case 2:                                       
                codigoCadastro
                console.clear()
                console.log("===========================================================")
                console.log("|                        Quartos                          |")
                console.log("===========================================================")
                console.log("|                                                         |")
                console.log("|            Quarto cadastrado com sucesso!               |")
                console.log("|                                                         |")
                console.log("|                                                         |")
                console.log("===========================================================")
                thigas = readline.question("aperte enter para continuar...")
                opcao2 = 0
                break
                        

                case 3: 
                codigoCadastro
                console.clear()
                console.log("===========================================================")
                console.log("|                        Quartos                          |")
                console.log("===========================================================")
                console.log("|                                                         |")
                console.log("|             Quarto excluído com sucesso                 |")
                console.log("|                                                         |")
                console.log("|                                                         |")
                console.log("===========================================================")
                thigas = readline.question("aperte enter para continuar...")
                opcao2 = 0
                break 
        
                case 4: 
                flag = true
                break
}
}
}



function servicos (opcao2, cod){
    let flag = false
    opcao2 = 0
    let thigas 
while (flag == false){                       
switch (opcao2)
{
                case 0:
                console.clear()
                console.log("===========================================================")
                console.log("|                        Serviços                         |")
                console.log("===========================================================")
                console.log("|                1- Serviço de Quarto                     |")
                console.log("|                2- Limpeza de Quarto                     |")
                console.log("|                3- Frigobar                              |")
                console.log("|                4- Retornar ao Menu Principal            |")
                console.log("===========================================================")
                opcao2 = readline.questionInt("")

                case 1:
                codigoCadastro         
                console.clear()
                console.log("===========================================================")
                console.log("|                        Serviços                         |")
                console.log("===========================================================")
                console.log("|                                                         |")
                console.log("|                   Tipos de serviço...                   |")
                console.log("|                                                         |")
                console.log("|                                                         |")
                console.log("===========================================================")
                thigas = readline.question("aperte enter para continuar...")
                opcao2 = 0
                break
                                                
                case 2:
                codigoCadastro
                console.clear()
                console.log("===========================================================")
                console.log("|                        Serviços                         |")
                console.log("===========================================================")
                console.log("|                                                         |")
                console.log("|                  Opçoes de limpeza...                   |")
                console.log("|                                                         |")
                console.log("|                                                         |")
                console.log("===========================================================")
                thigas = readline.question("aperte enter para continuar...")
                opcao2 = 0
                break
                
                case 3:
                codigoCadastro        
            
                console.clear()
                console.log("===========================================================")
                console.log("|                        Serviços                         |")
                console.log("===========================================================")
                console.log("|                                                         |")
                console.log("|                      Frigobar...                        |")
                console.log("|                                                         |")
                console.log("|                                                         |")
                console.log("===========================================================")
                break
                           
                                        
                case 4:
                flag = true
}
}
}                  

//main


loginSenha(login, senha, tent)

while (turn == true)
{
menuPrincipal(opcao)
opcao = readline.questionInt("")
switch (opcao)
{
case 0:
menuPrincipal()
opcao = readline.questionInt("")
break
case 1:
menuAluguel(opcao2, cod)
break
case 2:
menuQuartos(opcao2, cod)
break
case 3:
servicos(opcao2, cod)
break
case 4:
turn = false
break
}
}
