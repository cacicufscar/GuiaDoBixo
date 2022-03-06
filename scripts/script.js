//declaração globais
let lastWindowY;
let goUpButton = document.querySelector('span#go_top');
let nav = document.querySelector('nav#nav');

//Evento de scroll
document.addEventListener('scroll',(e)=>{
    //detecta a situação da animação 
    if(nav.scrollHeight > window.scrollY  || window.scrollY - lastWindowY > 0){
        slideButtonDown();
    }else{
        slideButtonUp();
    }

    //atualizia a ultima posição
    lastWindowY = window.scrollY;
});

//funções auxiliares
function slideButtonUp(){
    //declarações locais
    let animation = goUpButton.animate([{bottom: '16px'}], 500);

    //tornando a animação permatente
    animation.addEventListener('finish', ()=>{
        goUpButton.style.bottom = '16px';
    });
}

function slideButtonDown(){
    //declarações locais
    let animation = goUpButton.animate([{bottom: '-72px'}], 500);

    //tornando a animação permatente
    animation.addEventListener('finish', ()=>{
        goUpButton.style.bottom = '-72px';
    });
}