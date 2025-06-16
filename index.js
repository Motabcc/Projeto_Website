
   
    const linkCopiar = document.getElementById('copiarEmail');
    const feedbackElemento = document.getElementById('copia-feedback');

  
    linkCopiar.addEventListener('click', function(event) {
        event.preventDefault(); 

        const mailtoLink = linkCopiar.getAttribute('href');
        
        const emailAddress = mailtoLink.split(':')[1];

        //copia
        navigator.clipboard.writeText(emailAddress).then(function() {
            // Mostra o feedback visual
            feedbackElemento.classList.add('feedback-visivel');
            feedbackElemento.classList.remove('feedback-oculto');

            // esconde 
            setTimeout(function() {
                feedbackElemento.classList.add('feedback-oculto');
                feedbackElemento.classList.remove('feedback-visivel');
            }, 2000);

        }).catch(function(err) {
            console.error('Erro ao copiar o e-mail: ', err);
            alert('Não foi possível copiar o e-mail.');
        });
    });








    const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal', // Direção do slider
    loop: true,              // Faz o slider voltar para o primeiro item depois do último

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Efeito de transição (fade é mais suave)
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});