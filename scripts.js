/*
TancTonqTia
*/


/*
Player Factory function
*/

const Player = (name, isVsComputer) => {
    const returnName = () => name;
    const returnIsVsComputer = () => isVsComputer;
    return { returnName, returnIsVsComputer }
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
        square.addEventListener("click", assignTeam);
        gameWrapper.appendChild(square);
    }

    function assignTeam() {

    }

})();

/*
Game Flow module 
*/

const gameFlow = (() => {
    let nameInputWrapper = document.getElementById("name__wrapper");
    let nameInputElement = document.getElementById("name_input");

    const renderNameInput = (() => {
        let gameTypeWrapper = document.getElementById("gametype__wrapper");
        let vsComp = document.getElementById("vs_computer");

        vsComp.addEventListener("click", revealNameInput);

        function revealNameInput() {
            nameInputWrapper.classList.add("show_element");
            nameInputWrapper.classList.remove("hide_element");
            gameTypeWrapper.classList.add("hide_element");
        }
    })();
    let userOne = Player(nameInputElement.value, true);
})();

/*
Display Controller Module
*/
const displayController = (() => {

})();