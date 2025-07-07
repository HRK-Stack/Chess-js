import { clearHighlight, clearInDangerSquare, movePieceTo, selfHighlight } from "../js/render/render.js";
import { ROOT_DIV, selectedSqr, sqrData } from "../utils/G_Constants.js";
import { sqrMap } from "../utils/map.js";
import { blackBishopClicked, whiteBishopClicked } from "./bishopClicked.js";
import { blackKingClicked, whiteKingClicked } from "./kingClicked.js";
import { blackKnightClicked, whiteKnightClicked } from "./knightClicked.js";
import {  blackPawnClicked, whitePawnClicked } from "./pawnClicked.js";
import { blackQueenClicked, whiteQueenClicked } from "./queenClicked.js";
import { blackRookClicked, whiteRookClicked } from "./rookClicked.js";


export function globalEvent(){
    ROOT_DIV.addEventListener("click",function (event) {   
        
        //Select piece and show movable spot with highlight
        if(event.target.localName == 'img'){
            clearHighlight();
            const clickedId = event.target.parentNode.id;
            const sqr = sqrMap[clickedId]; 
            //if selected piece is indanger it will replace with previous selected piece            
            if(sqr.inDanger){
                movePieceTo(sqr.id,selectedSqr);
                clearInDangerSquare();
            }else{
                clearInDangerSquare();
                clearHighlight();
                selfHighlight(clickedId); // highlight clicked piece

                if(sqr.piece.name == "WHITE_PAWN") whitePawnClicked(sqr);
                else if(sqr.piece.name == "BLACK_PAWN") blackPawnClicked(sqr);
                else if(sqr.piece.name == "WHITE_BISHOP") whiteBishopClicked(sqr);
                else if(sqr.piece.name == "BLACK_BISHOP") blackBishopClicked(sqr);
                else if(sqr.piece.name == "WHITE_ROOK") whiteRookClicked(sqr)
                else if(sqr.piece.name == "BLACK_ROOK") blackRookClicked(sqr);
                else if(sqr.piece.name == "WHITE_KNIGHT") whiteKnightClicked(sqr);
                else if(sqr.piece.name == "BLACK_KNIGHT") blackKnightClicked(sqr);
                else if(sqr.piece.name == "WHITE_QUEEN") whiteQueenClicked(sqr);
                else if(sqr.piece.name == "BLACK_QUEEN") blackQueenClicked(sqr);
                else if(sqr.piece.name == "WHITE_KING") whiteKingClicked(sqr);
                else if(sqr.piece.name == "BLACK_KING") blackKingClicked(sqr);
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
