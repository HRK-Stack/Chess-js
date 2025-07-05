import { clearHighlight, highlightSquare, movePieceTo } from "../js/render/render.js";
import { ROOT_DIV, sqrData } from "../utils/G_Constants.js";

let selectedSqr = {}

function whitePawnClicked(sqr) {
    const curPos = sqr.piece.currentPosition;
    const col = curPos[0]; // 'a', 'b', etc.
    const row = parseInt(curPos[1]);

    if (row === 2) {  // Initial double-step 

        const firstSquareId = col + (row + 1);
        const secondSquareId = col + (row + 2);

        const firstSqr = sqrData.find(sqr => sqr.id == firstSquareId);
        const secondSqr = sqrData.find(sqr => sqr.id == secondSquareId);
        
        if(firstSqr && firstSqr.piece == null){
            firstSqr.highlight = true;
            if (secondSqr && secondSqr.piece == null) {
                secondSqr.highlight = true;
            }
        }
    }
    else {
        const targetId = col + (row + 1);
        const targetSquare = sqrData.find((sqr) => sqr.id == targetId)
        if(targetSquare && targetSquare.piece == null){
            targetSquare.highlight = true;
        }
    }
    selectedSqr = sqr; 
    highlightSquare();
}

function blackPawnClicked(sqr) {
    const curPos = sqr.piece.currentPosition;
    const col = curPos[0]; // 'a', 'b', etc.
    const row = parseInt(curPos[1]);

    if (row === 7) {  // Initial double-step 

        const firstSquareId = col + (row - 1);
        const secondSquareId = col + (row - 2);

        const firstSqr = sqrData.find(sqr => sqr.id == firstSquareId);
        const secondSqr = sqrData.find(sqr => sqr.id == secondSquareId);
        
        if(firstSqr && firstSqr.piece == null){
            firstSqr.highlight = true;
            if (secondSqr && secondSqr.piece == null) {
                secondSqr.highlight = true;
            }
        }
    }
    else {
        const targetId = col + (row - 1);
        const targetSquare = sqrData.find((sqr) => sqr.id == targetId)
        if(targetSquare && targetSquare.piece == null){
            targetSquare.highlight = true;
        }
    }
    selectedSqr = sqr; 
    highlightSquare();
}



export function globalEvent(){
    ROOT_DIV.addEventListener("click",function (event) {        
        if(event.target.localName == 'img'){
            clearHighlight();
            const clickedId = event.target.parentNode.id;
            const sqr = sqrData.find((currEl) => currEl.id == clickedId);

            if(sqr.piece.name == "WHITE_PAWN") whitePawnClicked(sqr);
            if(sqr.piece.name == "BLACK_PAWN") blackPawnClicked(sqr);
            
        }    
        if(event.target.localName == 'div' && event.target.id !== "root"){
            sqrData.forEach(sqr => {
                if(sqr.id == event.target.id && sqr.highlight){
                    movePieceTo(event.target.id,selectedSqr);
                }
            });
        }
    })
}
