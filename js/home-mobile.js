document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(() => {
        let Box =document.querySelector('.Section-1 .Box')
    Box.classList.add('appear-top')    
    }, 800);
    let projects =[...document.querySelectorAll('.Project')]
    let blacks =[...document.querySelectorAll('.blackSec')]
    document.addEventListener('scroll',(e)=>{
        projects.map(pro=>{
            animate(pro)
            })
     
       const docHeight = document.documentElement.scrollHeight
       const viewportHeight = window.innerHeight
       const scrollPosition = window.scrollY || document.documentElement.scrollTop
       if(scrollPosition + viewportHeight >= docHeight - 1){
        console.log('arrive end of page !');
        blacks.map(b=>{
            b.classList.add('appear')
        })
       }
       
    })
})
const animate = (elem)=>{
    let fadeElement = elem
    let positionElement = fadeElement.getBoundingClientRect().top+100;
    let windowHeight = window.innerHeight
    if(positionElement < windowHeight){
        fadeElement.classList.add('appear')
    }
}

const lenis =  new Lenis({
    smoothWheel: true,
    wheelMultiplier:2
  });


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)