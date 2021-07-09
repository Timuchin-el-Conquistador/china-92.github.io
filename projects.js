const sliders = document.querySelectorAll('.fa-chevron-left')

let index = 1
const sliding = () => {
    
    for(let i=0; i<document.querySelectorAll('.project-tile').length;i++){
        document.querySelectorAll('.project-tile')[i].style.right ='-2000px'

    }
    document.querySelectorAll('.project-tile')[index].style.right = '10%'
    index--
    if(index<0){
        index=1
    }

}
Array.from(sliders).forEach(slider => {slider.addEventListener('click', sliding)})

