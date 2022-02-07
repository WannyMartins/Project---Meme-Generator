const textoInput = document.getElementById('meme-text');
const input = document.getElementById('text-input');
const div = document.getElementById('meme-image-container');
const memeInsert = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');
const bntFire = document.getElementById('fire');
const bntWater = document.getElementById('water');
const bntEarth = document.getElementById('earth');
const bntMeme1 = document.getElementById('meme-1');
const bntMeme2 = document.getElementById('meme-2');
const bntMeme3 = document.getElementById('meme-3');
const bntMeme4 = document.getElementById('meme-4');

function texto() {
    textoInput.innerHTML = input.value;
}

input.addEventListener('input', texto);


function uploadImg(event) {
    memeImg.src = URL.createObjectURL(event.target.files[0]);
}
memeInsert.addEventListener('change', uploadImg);

function mudaBorda(borda) {
    div.style.border = borda;

}
bntFire.addEventListener('click', function () {
    mudaBorda('3px dashed red')
});
bntEarth.addEventListener('click', function () {
    mudaBorda('6px groove green');
});
bntWater.addEventListener('click', function () {
    mudaBorda('5px double blue');
});

function carregarImg(src){
    memeImg.src = src
}
bntMeme1.addEventListener('click', function () {
    carregarImg('imgs/meme1.png')});
bntMeme2.addEventListener('click', function () {
    carregarImg('imgs/meme2.png')});
bntMeme3.addEventListener('click', function () {
    carregarImg('imgs/meme3.png')});
bntMeme4.addEventListener('click', function () {  
    carregarImg('imgs/meme4.png')});

    
window.onload = [
    carregarImg("imgs/meme4.png"), 
    input.value = 'VAMOS CRIAR MEMES?',
    texto()
]
// change garante que será alterado o file de acordo com a função uploadImg;

// pega o objeto no memeInsert(event target) e poe como src'url' memeImg parecendo o objetoURL criado.