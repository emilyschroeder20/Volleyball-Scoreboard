let teamOne = ""
let teamTwo = ""
let gameCount=0

function processTeams() {
    document.getElementById("scoreboard").classList.add("show")
    
    teamOne = document.getElementById("teamOne").value
    if (teamOne!=""){
        console.log("Make Team One Visible")
        document.getElementById("team1ScoreBox").classList.add("show")
        document.getElementById("scoreboard").classList.add("show")
    }
    document.getElementById("teamOneName").textContent = teamOne
    teamTwo = document.getElementById("teamTwo").value
    if (teamTwo!=""){
        console.log("Make Team Two Visible")
        document.getElementById("team2ScoreBox").classList.add("show")
    }
    document.getElementById("teamTwoName").textContent = teamTwo
    return false
}

function increment(ele){
    ele.textContent = Number(ele.textContent)+1
    evaluateScore()
}

function minusOne(){
    let score1 = document.getElementById("teamOneScore")
    score1.textContent = Number(score1.textContent)-1
    evaluateScore()
}

function minusTwo(){
    let score2 = document.getElementById("teamTwoScore")
    score2.textContent = Number(score2.textContent)-1
    evaluateScore()
}

function evaluateScore(){
    let score1 = document.getElementById("teamOneScore")
    let score2 = document.getElementById("teamTwoScore")
    numOne = Number(score1.textContent)
    numTwo = Number(score2.textContent)

    result = checkScore(numOne, numTwo)
    if (result=="One"){
        score1.classList.add("winner")
    } else if (result=="Two"){
        score2.classList.add("winner")
    } else {
        score1.classList.remove("winner")
        score2.classList.remove("winner")
    }
}

function checkScore(numOne, numTwo){
    if (numOne>=25 && (numOne-numTwo)>=2){
        return "One"
    } else if (numTwo>=25 && (numTwo-numOne)>=2) {
        return "Two"
    } else {
        return "Neither"
    }
}

function reset(){
    let score1 = document.getElementById("teamOneScore")
    let score2 = document.getElementById("teamTwoScore")
    score1.textContent = 0
    score2.textContent = 0
    score1.classList.remove("winner")
    score2.classList.remove("winner")
}

function save(){
    let score1 = document.getElementById("teamOneScore")
    let score2 = document.getElementById("teamTwoScore")
    let games1 = document.getElementById("teamOneGames")
    let games2 = document.getElementById("teamTwoGames")
    let history = document.getElementById("historyBody")
    numOne = Number(score1.textContent)
    numTwo = Number(score2.textContent)
    //result=checkScore(numOne, numTwo)
    winner=""
    loser=""
    if (numOne>numTwo){
        games1.textContent = Number(games1.textContent)+1
        winner=teamOne
        loser=teamTwo
    } else if (numTwo > numOne){
        games2.textContent = Number(games2.textContent)+1
        winner=teamTwo
        loser=teamOne
    }
    gameCount = Number(games1.textContent)+Number(games2.textContent)
    if (gameCount>1){
        history.textContent+="\n"
    }
    history.textContent+="Game "+gameCount+": "+numOne+"-"+numTwo+" "+winner+" beat "+loser+"!"
    reset()
}

function resetAll(){
    let games1 = document.getElementById("teamOneGames")
    let games2 = document.getElementById("teamTwoGames")
    let history = document.getElementById("historyBody")
    reset()
    games1.textContent=0
    games2.textContent=0
    history.textContent=""
}