//alert("Oi") //Cria um alerta e interrompe toda a execução
console.log("Script Inicializado");

const botoesTipo = document.querySelectorAll('.tipoDoacao');
const inputNome = document.getElementById("inptNome"); //Pega um elemento pelo ID
const inputEmail = document.getElementById("inptEmail")
const inputCelular = document.getElementById("inptCelular")
const Head = document.getElementById("head")
const btnPagamento = document.getElementById("btnPagamento")

botoesTipo.forEach(botao => {
        botao.addEventListener('click', () => {                 //código para fixar a cor nos botões de frequencia de doação
            // Remove a classe de todos os botões
            botoesTipo.forEach(b => b.classList.remove('botaoSelecionado'));
            // Adiciona a classe ao botão clicado
            botao.classList.add('botaoSelecionado');
        });
    });

    
emailjs.init({
  publicKey: "SUA_PUBLIC_KEY_AQUI",
});
btnPagamento.addEventListener('click', btnPagamentoClick);
function btnPagamentoClick(){
    window.open('https://www.youtube.com/watch?v=LavcrI0F6LE', 'popupPagamento', 'width=600,height=400');
}
document.getElementById('btnAssinar').addEventListener('click', function(){
    const email = inputEmail.value;
    const nome = inputNome.value;
    const templateParams = {
        from_name: 'Vicente gostosão eco education', 
        email_to: email, 
        message: "oi, bem vindo a newsletter do eco education. Você vai receber Emails todo Domingo de manhã informando sobre atualizações do projeto",
    };
    emailjs.send('service_i3d8epn', 'template_4usbw5s', templateParams)
        .then(function(response) {
           console.log('SUCESSO!', response.status, response.text);
           alert('Inscrição realizada com sucesso! Verifique seu e-mail.');
        }, function(error) {
           console.log('ERRO...', error);
           alert('Ocorreu um erro ao realizar a inscrição. Tente novamente.');
        })
})
