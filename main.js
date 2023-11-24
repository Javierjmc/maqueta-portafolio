const iconoBurger=document.getElementById('icono-hamburguesa');
const menu=document.getElementById('menu');


iconoBurger.addEventListener('click', ()=>{
    menu.classList.toggle('translate-y-[0]')
    menu.classList.toggle('sm:translate-y-[0]')   

}
);


