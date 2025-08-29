// Heart button 
let heartCount = 0;
const heartCountEl = document.getElementById("heart-count");
const heartIcons = document.getElementsByClassName("fa-heart");
for(let i = 0 ; i < heartIcons.length ; i++ ){
    heartIcons[i].addEventListener("click", function(){
        heartCount++;
        heartCountEl.innerText = heartCount;
    });
}

//  Coin
let coins = 100;
const coinCost = document.getElementById("call-coin");
function updateCoin() {
    coinCost.innerText = coins;
}

// Call Button
function callButton(card) {
    const nameEl = card.getElementsByClassName("service-name");

    for (let i = 0; i < nameEl.length; i++) {
        name = nameEl[i].innerText;
    }

    const numberEl = card.getElementsByClassName("service-number");
    for (let i = 0; i < numberEl.length; i++) {
        number = numberEl[i].innerText;
    }

    if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
    }
    coins -= 20;                     
    updateCoin();             
    alert(`Calling ${name} ${number}`);
    addToCallHistory(name, number);  
}

const callButtons = document.getElementsByClassName("call-btn");

for (let i = 0; i < callButtons.length; i++) {
    const btn = callButtons[i];
    const card = btn.closest(".card-section");
    btn.addEventListener("click", function() {
        callButton(card);
    });
}

// Add Call History
const callHistory = document.getElementById("call-history-entries");
function addToCallHistory(name, number) {
    const entry = document.createElement("div");
    entry.classList.add("p-2", "bg-gray-100", "rounded-xl");

    const now = new Date();
    const timeStr = now.toLocaleTimeString();

    entry.innerHTML = `<strong>${name}</strong> ${number} - ${timeStr}`;
    callHistory.appendChild(entry);
}

// Clear call history
document.getElementById("clear-btn").addEventListener("click", function () {
    callHistory.innerText = "";
});

//Copy Button
let copyCount = 0;
const copyCountEl = document.getElementById("copy-count");
function updateCopyDisplay() {
    copyCountEl.innerText = copyCount;
}
function copyButton(card) {
    const numberEls = card.getElementsByClassName("service-number");
    for (let i = 0; i < numberEls.length; i++) {
        number = numberEls[i].innerText;
    }

    copyCount += 1;
    updateCopyDisplay();
    alert(`Copied ${number} to clipboard!`);
}

const copyButtons = document.getElementsByClassName("copy-btn");
for (let i = 0; i < copyButtons.length; i++) {
    const btn = copyButtons[i];
    const card = btn.closest(".card-section");
    btn.addEventListener("click", function() {
        copyButton(card);
    });
}









