/*
TancTonqTia
*/


/*
Player Factory function
*/

const Player = (name, isVsPlayer) => {
    const returnName = () => name;
    const returnIsVsPlayer = () => isVsPlayer;
    return { returnName, returnIsVsPlayer }
};

/*
Gameboard Module
*/

const gameBoard = (() => {
    let board = [
        0, 1, 2,
        3, 4, 5,
        6, 7, 8
    ];

    const gameWrapper = document.getElementById("game__wrapper");

    for (const element of board) {
        let square = document.createElement("div");
        square.setAttribute("id", element);
        square.classList.add("game_square");
        square.addEventListener("click", assignTeam);
        gameWrapper.appendChild(square);
    }

    function assignTeam() {

    }
    return { board, gameWrapper }

})();

/*
Display Controller Module
*/
const displayController = (() => {
    let gameTypeWrapper = document.getElementById("gametype__wrapper");
    let nameInputWrapper = document.getElementById("name__wrapper");
    let vsHuman = document.getElementById("vs_human");
    let submitBtn = document.getElementById("name_submit");
    const gameTitle = document.getElementById("game_title");

    function revealNameInput() {
        nameInputWrapper.classList.add("show_element");
        nameInputWrapper.classList.remove("hide_element");
        gameTypeWrapper.classList.add("hide_element");
    }
    const submitForm = () => {
        const userNameOne = document.getElementById("name_input_one").value;
        const userNameTwo = document.getElementById("name_input_two").value;

        nameInputWrapper.classList.remove("show_element");
        nameInputWrapper.classList.add("hide_element");

        gameBoard.gameWrapper.classList.add("show_element");
        gameBoard.gameWrapper.classList.remove("hide_element");
        gameFlow.statePlayers();
        return { userNameOne, userNameTwo }
    }

    submitBtn.addEventListener("click", submitForm)
    vsHuman.addEventListener("click", revealNameInput);

    return { submitForm, gameTitle }
})();


/*
Game Flow module 
*/

const gameFlow = (() => {
    const players = (() => {
        playerOne = Player(displayController.submitForm.userNameOne, true);
        playerTwo = Player(displayController.submitForm.userNameTwo, true);
        return { playerOne, playerTwo}
    })();

    const statePlayers = (() => {
        displayController.gameTitle.innerHTML = `${players.playerOne.returnName()} vs ${players.playerTwo.returnName()}`;
    });
    return { players, statePlayers }
})();