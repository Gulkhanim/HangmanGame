const wordsection = document.querySelector(".word")
const boardsection = document.querySelector(".board")
const figure = document.querySelector(".figure")
const musiccopadam = document.querySelector(".copadam")
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

const human = ["head", "body","rightarm","leftarm","rightleg","leftleg","help"];

 
let randomword = "";

const createkeyboard=()=>{
    boardsection.innerHTML=""
    for(let a=0;a<letters.length;a++) {
        let square=document.createElement("div")
        square.classList.add("lettersquare")
        square.textContent=letters[a];
        boardsection.appendChild(square)

    }
};

const createWord=()=>{
wordsection.innerHTML=""
randomword=selectWord();
for (let a = 0; a < randomword.length ; a++)
{
let square = document.createElement("div");
square.classList.add("square");
square.setAttribute("data-value",randomword[a]);
wordsection.appendChild(square);

}
return 
};

const selectWord=()=>{
    const word = [
        "GÜLXANIM",
        "MEHİN",
        "AYTAC",
        "JALƏ",
        "SEYMUR",
        "KƏNAN",
        "SƏBUHİ",
        "MURAD",
        "MƏTİN",
        "ZAUR",
        "FAZİL",
        "İBRAHİM",
        "SƏRXAN",
    ];

    const randomWord = Math.floor(Math.random() * word.length);
    console.log(word[randomWord]);
return (keyWord=Array.from(word[randomWord]));
};


const generatebody=(value)=>{
    let bodypart=document.createElement("div");
    bodypart.classList.add(human[value]);
    figure.appendChild(bodypart);

};

const startgame=()=>{
    createkeyboard();
    createWord();
    let buttons=document.querySelectorAll(".lettersquare")
    let squares=document.querySelectorAll(".square")
    let figuresection=document.querySelectorAll(".figure div")
    let wrongcount=0
    // console.log(wrongcount);
    let correctcount=0
    figuresection.forEach(item=>{
        if (!item.getAttribute("data-value")) item.remove()
    });
    buttons.forEach(item=>{
        item.addEventListener("click",(e)=>{
            let chosenletter=e.target.textContent
            if(randomword.includes(chosenletter))
            {
                e.target.classList.add("correct")
                squares.forEach(item=>{
                    if(item.getAttribute("data-value")===chosenletter) {
                        item.textContent = item.getAttribute("data-value");
                        item.classList.add("show")
                        correctcount++
                    }
                })
                if(correctcount===randomword)
                {
                    buttons.forEach(item=>{
                        item.classList.add("close")
                    })
                    squares.forEach(item=>{
                        item.style.background="green"
                    })
                   
                    setTimeout(() => {
                        startgame();
                    },2000);

                    selectWord()
                }

            }
            else{
                e.target.classList.add("wrong")
                wrongcount++
                generatebody(wrongcount-1)
                if(wrongcount===6)
                {
                    buttons.forEach(item=>{
                        item.classList.add("close")
                    })
                    squares.forEach(item=> {
                        item.classList.add("show")
                        item.style.background="red"

                    })
                    setTimeout(() => {
                        startgame();
                    },2000);
                }
            }
        });
    });
};
startgame()
// createkeyboard();
// createWord();
