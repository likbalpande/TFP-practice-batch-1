function main() {
    const n = Number(prompt("Please provide the number of players:"));
    if (Number.isNaN(n)) {
        alert("Invalid Input");
        return;
    }

    const players = [];

    for (let i = 0; i < n; i++) {
        const name = prompt(`Please provide name of player (${i + 1})`);
        const score = Number(prompt(`Please provide score of player (${i + 1})`));
        if (Number.isNaN(score)) {
            alert("Invalid Input");
            return;
        }
        players.push({
            playerName: name,
            playerScore: score,
        });
    }

    players.sort((player1Obj, player2Obj) => {
        let player1Score = player1Obj.playerScore;
        let player1Name = player1Obj.playerName;
        let player2Score = player2Obj.playerScore;
        let player2Name = player2Obj.playerName;

        if (player1Score == player2Score) {
            if (player1Name > player2Name) {
                return 1;
            } else return -1;
        } else {
            if (player1Score > player2Score) {
                return -1;
            } else {
                return 1;
            }
        }
    });

    // console.log("🟡 : players:", players);

    // const list = document.getElementById("player-list");

    // for (let i = 0; i < players.length; i++) {
    //     const name = document.createElement("dt");
    //     name.innerText = players[i].playerName;
    //     const score = document.createElement("dd");
    //     score.innerText = players[i].playerScore;

    //     list.appendChild(name);
    //     list.appendChild(score);
    // }

    for (let i = 0; i < players.length; i++) {
        const name = players[i].playerName;
        const score = players[i].playerScore;
        document.write(`<h3>${name}: ${score}</h3>`);
    }
}

main();
