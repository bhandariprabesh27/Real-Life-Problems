//Working with local storage
//Local Storage euta testo space ho jun browser ma hunxa, tesma hamile data store garepaxi data stored nai rahanxa jaba samma hami aafai le teslai delete gardainam.

//Local Storage purai browser ko hunxa ki ta website ko hunxa, local storage huna ta browser ko naam ma hunxa but save chai website ko naam ma hunxa

//Console ma talako code lekhne:
// localStorage.setItem("key", "value"); //for adding
// localStorage.removeItem("key"); //for removing

//Create a button that blocks a user when he opens a website. Show "Blocked" in screen and open websites when he clicks "Unblock".

const blk = document.querySelector("#block");
const unblk = document.querySelector("#unblock");

blk.addEventListener("click", function () {
  localStorage.setItem("block", true);
  show();
});
unblk.addEventListener("click", function () {
  localStorage.setItem("block", false);
  show();
});

function show() {
  if (localStorage.getItem("block") === "false") {
    document.querySelector("#status span").textContent = "Not Blocked";
  } else {
    document.querySelector("#status span").textContent = "Blocked";
  }
}

show(); //yo function bahira ni chalaunu parne kinaki page refresh garda ni function le check garxa paila ko result k xa vanera
