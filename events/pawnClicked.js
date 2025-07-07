import { highlightInDangerSquare, highlightSquare } from "../js/render/render.js";
import { sqrData } from "../utils/G_Constants.js";
import {setSelectedSqr } from "../utils/G_Constants.js";
import { sqrMap } from "../utils/map.js";


export function whitePawnClicked(sqr) {
    const curPos = sqr.piece.currentPosition;
    const col = curPos[0]; // 'a', 'b', etc.
    const row = parseInt(curPos[1]);

    if (row === 2) {  // Initial double-step         
        const firstSquareId = col + (row + 1);
        const secondSquareId = col + (row + 2);

        const firstSqr = sqrMap[firstSquareId];
        const secondSqr = sqrMap[secondSquareId];
        
        if(firstSqr && firstSqr.piece == null){
            firstSqr.highlight = true;
            if (secondSqr && secondSqr.piece == null) {
                secondSqr.highlight = true;
            }
        }
    }else {
        const targetId = col + (row + 1);
        const targetSquare = sqrMap[targetId];
        if(targetSquare && targetSquare.piece == null){
            targetSquare.highlight = true;
        }
    }


    //check that if diagioanlly on one step is there a piece of opponent
    const leftDiagCol = String.fromCharCode(col.charCodeAt(0)-1)+(row+1);
    const rightDiagCol = String.fromCharCode(col.charCodeAt(0)+1)+(row+1);

    if (leftDiagCol[0] >= 'a'){
        const pieceOnLeftDiag = sqrMap[leftDiagCol];  //sqrData.find(sqr => sqr.id==leftDiagCol && sqr.piece != null && sqr.piece.name.includes("BLACK"));
        if(pieceOnLeftDiag.piece !== null && pieceOnLeftDiag.piece.name.includes("BLACK")){
            console.log("opponent piece on left :",pieceOnLeftDiag);
            pieceOnLeftDiag.inDanger = true;
            pieceOnLeftDiag.highlight = true;
        }
    }
    
    if(rightDiagCol[0] <= 'h'){
        const pieceOnRightDiag = sqrMap[rightDiagCol];
        if(pieceOnRightDiag.piece !== null && pieceOnRightDiag.piece.name.includes("BLACK")){
            pieceOnRightDiag.inDanger = true;
            pieceOnRightDiag.highlight = true;
        }        
    }
    


    
    setSelectedSqr(sqr);
    highlightSquare();
    highlightInDangerSquare();
}

export function blackPawnClicked(sqr) {
    const curPos = sqr.piece.currentPosition;
    const col = curPos[0]; // 'a', 'b', etc.
    const row = parseInt(curPos[1]);

    if (row === 7) {  // Initial double-step         
        const firstSquareId = col + (row - 1);
        const secondSquareId = col + (row - 2);

        const firstSqr = sqrMap[firstSquareId];
        const secondSqr = sqrMap[secondSquareId];
        
        if(firstSqr && firstSqr.piece == null){
            firstSqr.highlight = true;
            if (secondSqr && secondSqr.piece == null) {
                secondSqr.highlight = true;
            }
        }
    }else {
        const targetId = col + (row - 1);
        const targetSquare = sqrMap[targetId];
        if(targetSquare && targetSquare.piece == null){
            targetSquare.highlight = true;
        }
    }


    //check that if diagioanlly on one step is there a piece of opponent
    const leftDiagCol = String.fromCharCode(col.charCodeAt(0)-1)+(row-1);
    const rightDiagCol = String.fromCharCode(col.charCodeAt(0)+1)+(row-1);

    if (leftDiagCol[0] >= 'a'){
        const pieceOnLeftDiag = sqrMap[leftDiagCol];  //sqrData.find(sqr => sqr.id==leftDiagCol && sqr.piece != null && sqr.piece.name.includes("BLACK"));
        if(pieceOnLeftDiag.piece !== null && pieceOnLeftDiag.piece.name.includes("WHITE")){
            console.log("opponent piece on left :",pieceOnLeftDiag);
            pieceOnLeftDiag.inDanger = true;
            pieceOnLeftDiag.highlight = true;
        }
    }
    
    if(rightDiagCol[0] <= 'h'){
        const pieceOnRightDiag = sqrMap[rightDiagCol];
        if(pieceOnRightDiag.piece !== null && pieceOnRightDiag.piece.name.includes("WHITE")){
            pieceOnRightDiag.inDanger = true;
            pieceOnRightDiag.highlight = true;
        }        
    }
    


    
    setSelectedSqr(sqr);
    highlightSquare();
    highlightInDangerSquare();
}