let returnBtn = document.getElementById("resetBtn")
let nextBtn = document.getElementById("nextBtn")
let subText = document.getElementById("subText")
let subText2 = document.getElementById("subText2")
let title = document.getElementById("title")
let symbols = ["♔", "♕", "♖", "♗", "♘", "♤", "♧", "♡", "♢",]

let page = 0
let numSymbol = []

//* my array of states
  let pageArr = [ 
    { //* page 1
      title: "I can read your mind",
      nextBtn: "Next",
      returnBtn: "OK",
    },
    { //* page 2
        title: "Pick a number from 01 -99",
        nextBtn: "Next",
        subText: "when you have your number click next",
        returnBtn: "⭯"
    },
    { //* page 3
        title: "Add both digits together to get a new number",
        nextBtn: "Next",
        subText: "Ex: 14 is 1 + 4 = 5",
        subText2: "click next to proceed",
        returnBtn: "⭯"
    },
    { //* page 4
      title: "Subtract your new number from thr original number",
      nextBtn: "Next",
      subText: "Ex: 14 - 5 = 9",
      subText2: "click next to proceed",
      returnBtn: "⭯"
    },
    { //* page 5
      title: "",
      nextBtn: "Next",
      subText: "find your new number",
      subText2: "Note the symbol beside the number",
      resetBtn: "⭯"
    },
    { //* page 6
      title: "",
      subText: "Your symbol is:",
      resetBtn: "⭯"
    }
  ]


resetBtn.addEventListener("click", initPage);
nextBtn.addEventListener("click", initPage);





function initPage(e) {

  console.log(page)
  
  if (e.target.id === 'resetBtn') {
    if (page === 0) {
      page++ 
    } else {
      page = 0
    }
    hideElement()
  } 
  
  if (e.target.id === 'nextBtn') {
    page++
    hideElement()
  }
  
  title.innerHTML = pageArr[page].title;
  resetBtn.innerHTML = pageArr[page].returnBtn;
  nextBtn.innerHTML = pageArr[page].nextBtn;
  subText.innerHTML = pageArr[page].subText
  page[4].title = numSymbol.toString().replaceAll(",", "")
}
//* initPage()

function hideElement() {
  if (page === 0 || 5) {
    document.getElementById('nextBtn').classList.remove('d-none')
  } else {
    document.getElementById('nextBtn').classList.add('d-none')
  }
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) { //* While there remain elements to shuffle.
    randomIndex = Math.floor(Math.random() * currentIndex); //* Pick a remaining element.
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [ //* And swap it with the current element.
      array[randomIndex], array[currentIndex]];
  } return array;
}
shuffle(symbols)
console.log(symbols)

let numbersWithSymbols = [];


function addSymbols() {
  for (let i = 0; i <= 99; i++) {
    if (i % 9 === 0) {
    numSymbol.push(symbols[0] +  ' = ' + i +"<br/>" )
    } else {
      numSymbol.push(symbols[i] +  ' = ' + i +"<br/>")
    }
  }
  console.log(numSymbol)
  
  

}
addSymbols()
