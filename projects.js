
const projectContainer = document.createElement('div')
projectContainer.style.width='70%'

projectContainer.style.border='1px solid red'
projectContainer.style.margin="100px auto"

document.getElementById('projects').appendChild(projectContainer)
const header = document.createElement('header')
header.style.width='100%'
header.style.display='flex'
header.style.justifyContent='center'
const projectTile = document.createElement('button')
projectTile.innerHTML='General projects'

header.appendChild(projectTile)
const projectTile2 = document.createElement('button')
projectTile2.innerHTML='React projects'

header.appendChild(projectTile2)


projectContainer.appendChild(header)
projectContainer.style.display='none'
projectContainer.classList.add('portfolioContainer')
const closePortfolio = document.createElement('button')
closePortfolio.innerHTML='CLOSE'
header.appendChild(closePortfolio)



document.getElementById('portfolio').addEventListener('click',()=>{
  projectContainer.style.display='block'
  
})

closePortfolio.addEventListener('click', () =>{
  projectContainer.style.display='none'
})


projectContainer.appendChild(document.getElementById('survey-form'))
projectContainer.appendChild(document.getElementById('calculator'))