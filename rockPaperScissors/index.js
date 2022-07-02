let pscore = document.getElementById("player-score");
let cscore = document.getElementById("comp-score");
let inform = document.querySelector(".inform > p");
let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissors = document.getElementById("s");


pscore.innerHTML = 0;
cscore.innerHTML = 0;

function computerChoice() {
    let compChoices = ['r', 'p', 's'];
    let randomChoice = Math.floor(Math.random() * 3);
    return compChoices[randomChoice];
}


function game(playerChoice) {
    const compchoice = computerChoice();
    switch (playerChoice + compchoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, compchoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, compchoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, compchoice);
            break;
    }

    if (pscore.innerHTML == 10) {
        alert(" congrats! You won the game");
        location.reload();
    }
    if (cscore.innerHTML == 10) {
        alert("You lost the game");
        location.reload();
    }
}


function convert(choice) {
    if (choice === "r") return "rock";
    if (choice === "p") return "paper";
    return "scissors";
}

function win(player, comp) {
    pscore.innerHTML++;
    const smallplayer = "player".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    inform.innerHTML = `${convert(player)}${smallplayer} beats ${convert(comp)}${smallcomp}. You win! `;
    document.getElementById(player).classList.add('green-color');
    setTimeout(function() {
        document.getElementById(player).classList.remove('green-color');
    }, 300);
}

function lose(player, comp) {
    cscore.innerHTML++;
    const smallplayer = "player".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    inform.innerHTML = `${convert(comp)}${smallcomp} beats ${convert(player)}${smallplayer}. You lose!`;
    document.getElementById(player).classList.add('red-color');
    setTimeout(function() {
        document.getElementById(player).classList.remove('red-color');
    }, 300);
}

function draw(player, comp) {
    const smallplayer = "player".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    inform.innerHTML = `${convert(player)}${smallplayer} equals ${convert(comp)}${smallcomp}. Its a draw`;
    document.getElementById(player).classList.add('grey-color');
    setTimeout(function() {
        document.getElementById(player).classList.remove('grey-color');
    }, 300);
}


function main() {
    rock.addEventListener("click", function() {
        game("r");
    });

    paper.addEventListener("click", function() {
        game("p");
    });

    scissors.addEventListener("click", function() {
        game("s");
    });

}


main();