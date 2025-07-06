import { clearHighlight, clearInDangerSquare, movePieceTo, selfHighlight } from "../js/render/render.js";
import { ROOT_DIV, selectedSqr, sqrData } from "../utils/G_Constants.js";
import {  blackPawnClicked, whitePawnClicked } from "./pawnClicked.js";


export function globalEvent(){
    ROOT_DIV.addEventListener("click",function (event) {   
        
        if(event.target.localName == 'img'){
            clearHighlight();
            const clickedId = event.target.parentNode.id;
            const sqr = sqrData.find((currEl) => currEl.id == clickedId);

            if(sqr.inDanger){
                movePieceTo(sqr.id,selectedSqr);
                clearInDangerSquare();
            }else{
                clearInDangerSquare();
                selfHighlight(clickedId); // highlight clicked piece

                if(sqr.piece.name == "WHITE_PAWN") whitePawnClicked(sqr);
                else if(sqr.piece.name == "BLACK_PAWN") blackPawnClicked(sqr); 
                
                // if(sqr.piece.name == "WHITE_ROOK") whiteRookClicked(sqr);
                // if(sqr.piece.name == "BLACK_ROOK") blackRookClicked(sqr);
            } 
        }   
        if(event.target.localName == 'div' && event.target.id !== "root"){
            sqrData.forEach(sqr => {
                if(sqr.id == event.target.id && sqr.highlight){
                    movePieceTo(event.target.id,selectedSqr);
                }
            });
            clearHighlight();
            clearInDangerSquare();
        }

        if (event.target.id == "root") {clearHighlight(); clearInDangerSquare();}
    })
}
