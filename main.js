const iconoBurger=document.querySelector('#icono-hamburguesa');
const menu=document.querySelector('#menu');
const fondo=document.querySelector('#fondo');
const textoModo=document.querySelector('#textoModo')


iconoBurger.addEventListener('click', ()=>{
    menu.classList.toggle('translate-y-[0]')
}
);

fondo.addEventListener('click', ()=>{
    if (textoModo.textContent='Modo dia') {
        textoModo.textContent='Modo noche';
    }else{
        textoModo.textContent='Modo noche';
    }    
}
);



