const wordsection = document.querySelector(".word")
const boardsection = document.querySelector(".board")
const figure = document.querySelector(".figure")
const letters = [
    "A",
    "B",
    "C",
    "Ç",
    "D",
    "E",
    "Ə",
    "F",
    "G",
    "Ğ",
    "H",
    "X",
    "I",
    "İ",
    "J",
    "K",
    "Q",
    "L",
    "M",
    "N",
    "O",
    "Ö",
    "P",
    "R",
    "S",
    "Ş",
    "T",
    "U",
    "Ü",
    "V",
    "Y",
    "Z",
];

const human = ["head", "body","rightarm","leftarm","rightleg","leftleg"];

 
let randomword = "";

const createkeyboard=()=>{
    boardsection.innerHTML=""
    for(let a=0;a<letters.length;a++)
    {
        let square=document.createElement("div")
        square.classList.add("lettersquare")
        square.textContent=letters[a]
        boardsection.appendChild(square)

    }
}

createkeyboard();