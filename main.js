function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador] 
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function(){
        
        playSonido(idAudio);
    };

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
       
        
    }
   
   
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }

}









/* function playSonidoClap (){
    document.querySelector('#sonido_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick=playSonidoPom;
document.querySelector('.tecla_clap').onclick=playSonidoClap;
 */