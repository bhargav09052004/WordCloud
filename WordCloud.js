let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");

let errorMsg = "Please Enter a Word";

function createword(word) {
    let randomSize = Math.ceil(Math.random() * 40) + "px";
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let wordEl = document.createElement("span");
    wordEl.textContent=word;
    wordEl.style.fontSize = randomSize;
    wordEl.style.color = randomColor;
    wordEl.classList.add("m-3");
    wordsContainerEl.appendChild(wordEl);
}
for (let word of wordCloud) {
    createword(word)
}
function onAddWordToWordCloud() {
    let userEnteredWord = userInputEl.value;
    if (userEnteredWord !== "") {
        userInputEl.value = "";
        errorMsgEl.textContent = "";
        createword(userEnteredWord);
    } else {
        errorMsgEl.textContent = errorMsg;
    }
}