/*
TancTonqTia
*/

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
        square.addEventListener("click", assignTeam);
        gameWrapper.appendChild(square);
    }

    function assignTeam {
        
    }

})();

/*
Game Flow module 
*/

const gameFlow = (() => {

})();

/*
Display Controller Module
*/
const displayController = (() => {

})();

/*
Player Factory
*/

const Player = () => {

};