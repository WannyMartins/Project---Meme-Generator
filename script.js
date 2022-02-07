const textoInput = document.getElementById('meme-text');
const input = document.getElementById('text-input');
const div = document.getElementById('meme-image-container');
const memeInsert = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');

function texto() {
    textoInput.innerHTML = input.value;
}

input.addEventListener('input', texto);


function uploadImg(event) {
    memeImg.src = URL.createObjectURL(event.target.files[0]);
}
memeInsert.addEventListener('change', uploadImg);

// change garante que será alterado o file de acordo com a função uploadImg;

// pega o objeto no memeInsert(event target) e poe como src'url' memeImg parecendo o objetoURL criado.