const textoInput = document.getElementById('meme-text');
const input = document.getElementById('text-input');
const div = document.getElementById('meme-image-container');
const memeInsert = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');

function texto(event){
    textoInput.innerHTML = input.value
}

input.addEventListener('input', texto)

/*function uploadImg(){
    memeImg.src= 'image/*'

}

memeInsert.addEventListener('click', uploadImg)*/

