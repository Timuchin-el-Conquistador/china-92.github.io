
const buttons = document.querySelectorAll('#button')
let index = 0
document.querySelectorAll('#project-tile')[0].style.display ='block'
Array.from(buttons).forEach(el => el.addEventListener('click', function(){slider(el.value)}))
    

function slider(value){

const projects = document.querySelectorAll('#project-tile')
if(value==='&#x25B6;&#xFE0F;'){
     index++
}
else if(value!=='&#x25B6;&#xFE0F;'){
    index--
}
if(index<0){
    index=projects.length-1
}
else if(index>projects.length-1){
    index = 0
}
for(let i=0; i< projects.length; i++){
    projects[i].style.display = 'none'
}
projects[index].style.display = 'block'
}

let screen = matchMedia('(min-width: 800px)')
if(screen.matches){
setInterval(function(){slider('&#x25B6;&#xFE0F;')}, 4000)
}
