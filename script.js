let ativo = document.getElementById('img')
let system = 'off'

function on(){
  ativo.src =  'img/lamp-on.jpg'
  system = 'on'
  console.log(system)
}

function off(){
  ativo.src =  'img/lamp-off.jpg'
  system = 'off'
  console.log(system)
}

ativo.addEventListener("mouseenter",function() {
   
    if(system === 'off'){
      ativo.src =  'img/lamp-on.jpg'
      system = 'on'
    }

})

ativo.addEventListener("mouseleave",function() {
    
    if(system === 'on'){
      ativo.src =  'img/lamp-off.jpg'
      system = 'off'
    }

})