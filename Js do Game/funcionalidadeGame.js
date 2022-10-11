let mario = document.getElementById('mario');
let pipe = document.getElementById('pipe');
let cloud = document.getElementById('cloud');


//função para fazer o boneco pular

function jump(){

  mario.classList.add('jump-mario')

  setTimeout(()=>{
    mario.classList.remove('jump-mario')
  },500);
}

document.addEventListener('keydown', jump)

  

//condição para parar o jogo 

const game_over = setInterval(()=>{
  
  let pipePosition = pipe.offsetLeft;
  let cloudPosition = cloud.offsetLeft;
  let marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

  
  
  if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){

    //acessando e modificando estilo dos elementos

    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`;

    cloud.style.animation = 'none'; 
    cloud.style.left = `${cloudPosition}px` 

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;


    mario.src = './assets/game-over.png';
    mario.style.width = '70px';
    mario.style.marginLeft = '50px'

   
  }
  
},10);






