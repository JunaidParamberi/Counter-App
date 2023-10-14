




let saveEl = document.getElementById("save-el")
let countN = document.getElementById("increase")
  


let count = 0
  

function counting(){
  count = count + 1
  countN.innerText = count

}


function save(){
  var countString = count + " - "
  saveEl.textContent += countString
  
}


let resetEl = document.getElementsByClassName("reset")[0]


function reset(){
 countN.textContent = 0
 count = 0

  
}




welcomeEl.innerText = greetings + name 


let clearAll = document.getElementById('clear')

function clearall(){
  saveEl.textContent = "Previous Counts: "

}



