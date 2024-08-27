let ativo = document.getElementById('img')
let system = 'off'

function on(){
  
  ativo.src =  'img/lamp-on.jpg'

  system = 'on'
}

function off(){

  ativo.src =  'img/lamp-off.jpg'

  system = 'off'
}

ativo.addEventListener("mouseenter",function() {
   
    if(system === 'off'){

      ativo.src =  'img/lamp-on.jpg'

      system = 'on'
    }else{
      ativo.src =  system
    }

})

ativo.addEventListener("mouseleave",function() {
    
    if(system === 'on'){
      
      ativo.src =  'img/lamp-off.jpg'
      
      system = 'off'
    }else{
      ativo.src =  system
    }

})

let clicks = 0
ativo.addEventListener("click",function() {  
  
  clicks++

  if(clicks == 2){

    ativo.src =  "img/broken-lamp.jpg"

    system = "img/broken-lamp.jpg"

    clicks = 0
  }
})