document.getElementById('icon-menu').addEventListener('click', function(){
document.getElementById('nav-list').style.right = '0'
document.getElementById('icon-del').style.display = 'block'
document.getElementById('icon-menu').style.display = 'none'
})

document.getElementById('icon-del').addEventListener('click', function(){
document.getElementById('nav-list').style.right = '-3000px'
document.getElementById('icon-del').style.display = 'none'
document.getElementById('icon-menu').style.display = 'block'
})





const mediQuery = function (matchWidth) {
if(matchWidth.matches){
document.getElementById('icon-menu').style.display = 'block'
document.getElementById('icon-del').style.display = 'none'

}
else{
document.getElementById('icon-menu').style.display = 'none'
document.getElementById('icon-del').style.display = 'none'

}

}


const matchWidth = matchMedia('(max-width: 550px)')

mediQuery(matchWidth)
matchWidth.addEventListener('change', mediQuery)





