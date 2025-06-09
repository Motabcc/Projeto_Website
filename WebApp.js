//alert("Oi") //Cria um alerta e interrompe toda a execução
console.log("Script Inicializado");

const inputNome = document.getElementById("inputNome"); //Pega um elemento pelo ID
const inputSenha = document.getElementById("inputSenha"); //Pega um elemento pelo ID; const = constante
const btnSalvar = document.getElementById("btnSalvar"); //Pega um elemento pelo ID
const divResponse = document.getElementById("response");
const Head = document.getElementById("head")

btnSalvar.addEventListener('click',btnSalvarClick); //() => {}, cria a função dentro dele

function btnSalvarClick(){
    console.log("btn clicado")
    readTxt() // cria uma execução asincrona, ele vai tudo que vem depois a mesmo tempo // tem o await para fazer as coisas esperarem a exxecução da função e torna a função principal em async
    .then(reposta => { // arrow funcition
        if (reposta){
            console.log("Usuario Válido")
            divResponse.innerHTML = ` 
            <nav> 
                <a href="./paginas/home.html" > Página Principal </a>
            </nav>
            `
            Head.innerHTML += ` 
                <meta http-equiv="refresh" content="0;URL='./paginas/home.html'">
            `
        }
        else{ console.log("Usuario Invalido")
            divResponse.innerHTML = `Usuário Inválido`
        }
    })

}
// ctrl + f, localizar
async function readTxt(){ // async == asincrono, ele vai rodar no background, vai retornar uma promise
    console.log("readTxt...")
    
    return fetch("credenciais.txt")    // promise
    .then(resposta => resposta.text())                           // quando quiser um variavel declarar ela antes da flecha   // acessa o credenciais.txt
    .then(text => {
        return credValidate(text)                               // o then funciona para esperar o retorno do fetch, funciona como uma cascata
    })
    .catch(error => {
        console.log("Erro: ",error)
        return false
    })
}

function credValidate(credenciais){
    console.log("credValidate...")

    let inptNome = inputNome.value; 
    let inptSenha = inputSenha.value;

    let txtNome = credenciais.split("/")[0] 
    let txtSenha = credenciais.split("/")[1]

    return inptNome == txtNome && inptSenha == txtSenha
}