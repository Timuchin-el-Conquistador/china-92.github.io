document.querySelector('.html').addEventListener("click", () =>{

const popUpVar = document.querySelector('#popUp')
const toBlurVar = document.querySelectorAll('.toBlur')
popUpVar.style.display = 'block'
for(let i = 0; i<toBlurVar.length; i++){
toBlurVar[i].style.opacity = '0.3'
}

const popUpVarCSS = document.querySelector('#popUpCSS')
const popUpVarJS = document.querySelector('#popUpJS')
popUpVarCSS.style.display = 'none'
popUpVarJS.style.display = 'none'
})



document.querySelector('.css').addEventListener("click", () =>{

const popUpVar = document.querySelector('#popUp')
const popUpVarJS = document.querySelector('#popUpJS')
const popUpVarCSS = document.querySelector('#popUpCSS')
const toBlurVar = document.querySelectorAll('.toBlur')
popUpVarCSS.style.display = 'block'
for(let i = 0; i<toBlurVar.length; i++){
toBlurVar[i].style.opacity = '0.3'
}
popUpVar.style.display = 'none'
popUpVarJS.style.display = 'none'
})
document.querySelector('.js').addEventListener("click", () =>{
const popUpVar = document.querySelector('#popUp')
const popUpVarCSS = document.querySelector('#popUpCSS')
const popUpVarJS = document.querySelector('#popUpJS')
const toBlurVar = document.querySelectorAll('.toBlur')
popUpVarJS.style.display = 'block'
for(let i = 0; i<toBlurVar.length; i++){
toBlurVar[i].style.opacity = '0.3'
}
popUpVar.style.display = 'none'
popUpVarCSS.style.display = 'none'
})


document.querySelector('.icon-del2').addEventListener("click", () =>{


const popUpVar = document.querySelector('#popUp')
const toBlurVar = document.querySelectorAll('.toBlur')
popUpVar.style.display = 'none'
for(let i = 0; i<toBlurVar.length; i++){
toBlurVar[i].style.opacity = '1'
}
})
document.querySelector('.icon-del2css').addEventListener("click", () =>{

const popUpVar = document.querySelector('#popUpCSS')
const toBlurVar = document.querySelectorAll('.toBlur')
popUpVar.style.display = 'none'
for(let i = 0; i<toBlurVar.length; i++){
toBlurVar[i].style.opacity = '1'
}
})
document.querySelector('.icon-del2js').addEventListener("click", () =>{

const popUpVar = document.querySelector('#popUpJS')
const toBlurVar = document.querySelectorAll('.toBlur')
popUpVar.style.display = 'none'
for(let i = 0; i<toBlurVar.length; i++){
toBlurVar[i].style.opacity = '1'
}
})