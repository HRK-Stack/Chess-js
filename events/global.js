import { highlightSquare } from "../js/render/render.js";
import { clearHighlight } from "../utils/clearHighlight.js";
import { ROOT_DIV, sqrData } from "../utils/G_Constants.js";

function whitePawnClicked(sqr) {
    const curPos = sqr.piece.currentPosition;
    const col = curPos[0]; // 'a', 'b', etc.
    const row = parseInt(curPos[1]);

    if (row === 2) {  // Initial double-step 

        const ids = [col + (row + 1), col + (row + 2)];

        // Find squares with matching IDs
        const targetSquares = sqrData.filter(sqr => ids.includes(sqr.id));

        // Filter only those that are empty
        const emptySquares = targetSquares.filter(sqr => sqr.piece == null);

        // Highlight each valid empty square
        emptySquares.forEach(sqr => {
            sqr.highlight = true;
        });
        highlightSquare();
    }
    else {

        // const targetSquares = sqrData.filter(sqr => ids.includes(sqr.id));

        // Filter only those that are empty
        // const emptySquares = targetSquares.filter(sqr => sqr.piece == null);
    }
}

export function globalEvent(){
    ROOT_DIV.addEventListener("click",function (event) {      
        clearHighlight();  
        if(event.target.localName == 'img'){
            const clickedId = event.target.parentNode.id;
            const sqr = sqrData.find((currEl) => currEl.id == clickedId);
            if(sqr.piece.name == "WHITE_PAWN"){
                whitePawnClicked(sqr);
            }
        }
    })
}
