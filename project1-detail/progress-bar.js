let progressBar = document.getElementById("donation-progress");
let progressPercent = document.getElementById("progress-percent");
let currentAmount = document.getElementById("current-amount");
let goalAmount = document.getElementById("goal-amount");



let goal = 2500;
let current = 800;

currentAmount.textContent=current;
goalAmount.textContent=goal;

progressPercent.textContent = Math.floor(current/goal * 100) + "%"



let elem = document.getElementById("myBar");
elem.style.width = current/goal * 100 + "%"



function move() {
    let increase = setTimeout(frame, 10);
    function frame() {
      if (current < goal) {
        current += 20;
        currentAmount.textContent=current;
        elem.style.width = current/goal * 100 + "%";
      }
      progressPercent.textContent = Math.floor(current/goal * 100) + "%"
    }
    
    
}