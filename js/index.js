let returnBtn = document.getElementById("resetBtn")
let nextBtn = document.getElementById("nextBtn")
let subText1 = document.getElementById("subText")
let subText2 = document.getElementById("subText2")
let title = document.getElementById("title")
let symbols = ["♔", "♕", "♖", "♗", "♘", "♙"]

let page = 0

// my array of states
 let pageArr = [ 
    { // page 1
      title: "I can read your mind",
      returnBtn: "GO",
    },
    { // page 2
        title: "Pick a number from 01 -99",
        nextBtn: "Next",
        subText: "when you have your number click next",
        returnBtn: "⭯"
    },
    { // page 3
        title: "Add both digits together to get a new number",
        nextBtn: "Next",
        subText: "Ex: 14 is 1 + 4 = 5",
        subText2: "click next to proceed",
        returnBtn: "⭯"
    },
    { // page 4
      nextBtn: "Next",
      subText: "Ex: 14 - 5 = 9",
      subText2: "click next to proceed",
      returnBtn: "⭯"
    },
    { // page 5
      title: "Subtract your new number from thr original number",
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


nextBtn.addEventListener("click", initPage);
returnBtn.addEventListener("click", initPage);





function initPage() {
  title.innerHTML = pageArr[0].title;
  returnBtn.innerHTML = pageArr[0].returnBtn;

  if (pageArr[0].nextBtn) {
    nextBtn.innerHTML = pageArr[0].nextBtn;
    nextBtn.style.display = "block"; // Show the 'nextBtn'
  } else {
    nextBtn.style.display = "none"; // Hide the 'nextBtn'
  }
}
initPage()