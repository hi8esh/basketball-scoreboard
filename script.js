let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
console.log(homeScore, guestScore)

let currHomeScore = 0
let currGuestScore = 0

function add1Home() {
    currHomeScore += 1
    homeScore.textContent = currHomeScore
    checkLeader()
}

function add2Home() {
    currHomeScore += 2
    homeScore.textContent = currHomeScore
    checkLeader()
}

function add3Home() {
    currHomeScore += 3
    homeScore.textContent = currHomeScore
    checkLeader()
}

function add1Guest() {
    currGuestScore += 1
    guestScore.textContent = currGuestScore
    checkLeader()
}

function add2Guest() {
    currGuestScore += 2
    guestScore.textContent = currGuestScore
    checkLeader()
}

function add3Guest() {
    currGuestScore += 3
    guestScore.textContent = currGuestScore
    checkLeader()
}

function checkLeader() {
    if (currHomeScore > currGuestScore){
        homeScore.classList.add("highlight")
        guestScore.classList.remove("highlight")
    }
    else if(currHomeScore < currGuestScore){
        guestScore.classList.add("highlight")
        homeScore.classList.remove("highlight")
    }
    else{
        guestScore.classList.remove("highlight")
        homeScore.classList.remove("highlight")
    }
}

function newGame(){
    currHomeScore = 0
    currGuestScore = 0
    homeScore.textContent = currHomeScore
    guestScore.textContent = currGuestScore
    guestScore.classList.remove("highlight")
    homeScore.classList.remove("highlight")
}