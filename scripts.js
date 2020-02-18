/*
TancTonqTia
*/


/*
Player Factory function
*/

const Player = (name) => {
    const getName = () => name;
    return { getName }
};

const formSubmit = () => {
    let inputOne = document.getElementById("name_input_one").value;
    let inputTwo = document.getElementById("name_input_two").value;

    const {playerOne} = Player("trash");
    const playerTwo = Player(inputTwo); 
    
    return { playerOne, playerTwo }
}

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

    const revealNameInput = () => {
        nameInputWrapper.classList.add("show_element");
        nameInputWrapper.classList.remove("hide_element");
        gameTypeWrapper.classList.add("hide_element");
        return { revealNameInput }
    }
    const revealGameBoard = () => {
        nameInputWrapper.classList.remove("show_element");
        nameInputWrapper.classList.add("hide_element");
        gameBoard.gameWrapper.classList.add("show_element");
        gameBoard.gameWrapper.classList.remove("hide_element");
        return { revealGameBoard }
    }

    submitBtn.addEventListener("click", revealGameBoard && formSubmit)
    vsHuman.addEventListener("click", revealNameInput);

    return { gameTitle }
})();


/*
Game Flow module 
*/

const gameFlow = (() => {

})();

function start() {
    console.log(formSubmit.playerOne);
}