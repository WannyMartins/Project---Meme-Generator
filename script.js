var textoInput= document.getElementById('meme-text')
var input = document.getElementById('text-input')
var div = document.getElementById('meme-image-container')



function texto(event){
    textoInput.innerHTML = input.value
}

input.addEventListener('input', texto)


