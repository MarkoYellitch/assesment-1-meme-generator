const memeLink = document.querySelector('.meme-link');
const memeTextTop = document.querySelector('.meme-text-top');
const memeTextBottom = document.querySelector('.meme-text-bottom');
const memeButton = document.querySelector('.meme-button');
const memeForm = document.querySelector('#meme-form');
const memeHolder = document.querySelector('#meme-holder');
const pMeme = document.querySelector('.p-meme');
const memePlaceholder = document.querySelector('.placeholder-image')
const starterLink = document.querySelector('.starter-link')

let log = console.log;

memeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    memePlaceholder.remove();
    starterLink.remove();
    generator();


});
// meme generator //
function generator() {
    const memeTextValueTop = memeTextTop.value;
    const memeTextValueBottom = memeTextBottom.value;
    const memeInputValue = memeLink.value
    const newDiv = document.createElement('div')
    const memeImg = document.createElement('img');
    const removeBtn = document.createElement('button');
    const addTextTop = document.createElement('p');
    const addTextBottom = document.createElement('p');

    

    memeLink.value = '';
    memeTextTop.value = '';
    memeTextBottom.value = '';
    memeHolder.appendChild(newDiv);

    newDiv.appendChild(memeImg);
    newDiv.append(removeBtn);
    newDiv.classList.add('meme-div');

    memeImg.setAttribute('src', memeInputValue);
    memeImg.classList.add('fit-image');

    addTextTop.textContent = memeTextValueTop;
    addTextTop.classList.add('addMeme-text-top');
    
    addTextBottom.textContent = memeTextValueBottom;
    addTextBottom.classList.add('addMeme-text-bottom');

    newDiv.appendChild(addTextTop);
    newDiv.appendChild(addTextBottom);

    removeBtn.textContent = 'X'
    removeBtn.classList.add('remove-button')
    removeBtn.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove()
        }
    })


}

