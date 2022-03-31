

const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplay = document.getElementById('typeDisplay');
const typeInput = document.getElementById('typeInput');

typeInput.addEventListener('input',()=>{
    const sentenceArray = typeDisplay.querySelectorAll('span');
    // console.log(sentenceArray);
    const arrayValue = typeInput.value.split('');
    // console.log(arrayValue);
    sentenceArray.forEach((characterSpan,index)=>{
        if(characterSpan.innerText==arrayValue[index]){
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        }else{
            characterSpan.classList.add('incorrect');
            characterSpan.classList.remove('correct');
        }
    })
});



function GetRandomSentence(){
    return fetch(RANDOM_SENTENCE_URL_API)
    .then((response)=>response.json())
    .then((data)=>data.content);
}

async function RenderNextSentence() {
    const sentence =await GetRandomSentence();
    console.log(sentence);
    typeDisplay.innerText = '';
    // 文章を１文字ずつ分解
    let oneText =sentence.split('');
    oneText.forEach((character)=>{
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        // console.log(characterSpan);
        typeDisplay.appendChild(characterSpan);
        // characterSpan.classList.add('correct');
    });

    typeInput.innerText ='';

}

RenderNextSentence();