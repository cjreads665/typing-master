const stories = [
    "Fortunately, it had been a quiet flight so far. This night the sky was clear and peaceful, which was a blessing because shortly after takeoff U.S. Air Force Captain Matthew Marrow’s co-pilot had taken ill and was now in the back sleeping. Matthew had been flying Angel Flights as a volunteer for the last 15 years. He had made so many trips that he could probably do it in his sleep; he was one with the C130. With nothing to distract him from the sound of the bird’s engine, old thoughts filled his head. He was positive that it was only by the grace of God that he hadn’t ridden home in a box himself. The years he’d spent in Vietnam had been chocked full of close calls. To this day, he didn’t know whether he’d taken fool-hardy chances with an angel on his shoulder or if he’d just managed to avoid being in the wrong places at the wrong times. There had been uncounted times when the men standing right beside him were felled, and he hadn’t even been grazed; times, when he’d missed stepping on a mine by inches and the man right behind him, hadn’t been as lucky. At any rate, when he’d survived his multiple tours of duty and then made it safely back to the States, he had vowed to repay his debt of gratitude by carrying as many fallen heroes’ home as he could. It was the least that he could do.He snapped back to attention when the plane rattled and shuddered as it rode through a small pocket of turbulence. He straightened up in the seat and took a sip of his cold coffee. Glancing at the instrument panel, he saw that everything was as it should be.",
    "The quiet stretched out for some time, but eventually, the young man said, “Sir, you know how when you’re marching along and taking orders and staying focused so the bastards can’t sneak up on you? You lose track of time. Minutes seem like hours, days like months. Your past and present are so far removed from each other that … well, you live a lot of lifetimes in between breaths. Pretty soon you don’t even know what year it is.” He paused and took a deep breath. Rolling his hands into fists, he clenched his teeth, and answered, “As best as I know, I don’t have a home.” Realizing the soldier was getting agitated, Matthew changed the subject. “You look to be about the same age as my son. I peg you at about 24; am I close?”“I’m 23, Sir; been marching now for three years. After high school, I spent five years doing every dumb thing you can think up, and then me and two of my buddies had one too many drinks, and we walked into a recruiter’s office and signed on. It was accidentally one of the smartest things I ever did. Serving is an honor.”",
    "A surge of adrenaline shot through him when he glanced up into the face of a young soldier who was staring out the window. Realizing that he had a stowaway; an unpredictable situation on his hands, he carefully said, “We’ve still got about fourteen hours of flying time before we touch down at Travis Air Force Base, in California. You got a name, son?” “Yes, Sir, I’m Private First Class, Michael Winston.”His stowaway had lifted the name off one of the caskets. With the copilot out of commission, the only thing to do was to stay level-headed and buy time until he could think of a way to secure the cockpit. He nodded to the empty seat beside him, and said, “Have a seat, soldier. Fourteen hours is too long to stand.” Holding out his thermos, “You look like you could use some coffee; help yourself. There’s an extra cup in the box by the seat.”"
]



let text = document.querySelector('.typing-text p'),
textField = document.querySelector('.text-box'),
wrapper = document.querySelector('.wrapper'),
indexForAlphabet =0

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
    let spansInText = document.querySelectorAll('p span')
    let typedVal = textField.value.split('')
    // console.log(spansInText[indexForAlphabet].innerHTML);
    console.log(typedVal[indexForAlphabet]);
    if(typedVal[indexForAlphabet]!==undefined){
        if(typedVal[indexForAlphabet]==spansInText[indexForAlphabet].innerHTML){
            spansInText[indexForAlphabet].classList.add('correct')
            indexForAlphabet++
        }
        else{
            spansInText[indexForAlphabet].classList.add('incorrect')
            indexForAlphabet++
        }
    }
    else{
        indexForAlphabet--
        spansInText[indexForAlphabet].classList.remove('incorrect')
        spansInText[indexForAlphabet].classList.remove('correct')
    }
    spansInText.forEach(spanEl=>spanEl.classList.remove('active'))
    spansInText[indexForAlphabet].classList.add('active')

    
}


textField.addEventListener('input', startTyping)