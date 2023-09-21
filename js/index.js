let returnBtn = document.getElementById("resetBtn")
let nextBtn = document.getElementById("nextBtn")
let subText = document.getElementById("subText")
let subText2 = document.getElementById("subText2")
let title = document.getElementById("title")
let symbols = ["♔", "♕", "♖", "♗", "♘", "♤", "♧", "♡", "♢",]

let page = 0

// my array of states
 let pageArr = [ 
    { // page 1
      title: "I can read your mind",
      hideNextBtn: "",
      returnBtn: "GO",
    },
    { // page 2
        title: "Pick a number from 01 -99",
        nextBtn: "Next",
        subText: "when you have your number click next",
        returnBtn: "GO"
    },
    { // page 3
        title: "Add both digits together to get a new number",
        nextBtn: "Next",
        subText: "Ex: 14 is 1 + 4 = 5",
        subText2: "click next to proceed",
        returnBtn: "⭯"
    },
    { // page 4
      title: "Subtract your new number from thr original number",
      nextBtn: "Next",
      subText: "Ex: 14 - 5 = 9",
      subText2: "click next to proceed",
      returnBtn: "⭯"
    },
    { // page 5
      title: "",
      nextBtn: "Next",
      subText: "find your new number",
      subText2: "Note the symbol beside the number",
      returnBtn: "⭯"
    },
    { // page 6
      title: "",
      subText: "Your symbol is:",
      returnBtn: "⭯"
    }
  ]


returnBtn.addEventListener("click", initPage);





function initPage() {
  title.innerHTML = pageArr[page].title;
  returnBtn.innerHTML = pageArr[page].returnBtn;
  nextBtn.innerHTML = pageArr[page].nextBtn;
  nextBtn.style.display = 'none'

  if (page === 5) {
    
  } 

  page++
  if (page >= 6){
    page = 0
  }
}
initPage()
