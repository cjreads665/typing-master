let text = document.querySelector('.typing-text p'),
textField = document.querySelector('.text-box'),
wrapper = document.querySelector('.wrapper'),
indexForAlpahbet =0

function giveMeRandomP(){
    //generating a random index within our stories array's length
    let randomInd = Math.floor(Math.random() * stories.length)
    //we take each letter in the text-box and enclose it within span tags
    stories[randomInd].split('').forEach(letter=>{
        let spanEl = `<span>${letter}</span>`
        text.innerHTML += spanEl
    })
    //whenever there is a click or a key is pressed when on the page,
    //focus the text field
    document.addEventListener('keydown',()=>textField.focus())
    document.addEventListener('click',()=>textField.focus())
}
giveMeRandomP()

function startTyping(){
    let alphabetArray = document.querySelectorAll('.typing-text p span')
    if(textField.value.split('')[indexForAlpahbet]==undefined){
        indexForAlpahbet--
        alphabetArray[indexForAlpahbet].classList.remove('correct')
        alphabetArray[indexForAlpahbet].classList.remove('incorrect')
    }
    else{

        if(textField.value[indexForAlpahbet].split('')==alphabetArray[indexForAlpahbet].textContent){
            alphabetArray[indexForAlpahbet].classList.add('correct')
        }
        else{
            alphabetArray[indexForAlpahbet].classList.add('incorrect')
        }
    }
    indexForAlpahbet++
    alphabetArray.forEach(spanEl=>spanEl.classList.remove('active'))
    alphabetArray[indexForAlpahbet].classList.add('active')
}


textField.addEventListener('input', startTyping)