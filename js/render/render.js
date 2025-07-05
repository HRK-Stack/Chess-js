import { blackBishop, blackKing, blackKnight, blackPawn, blackQueen, blackRook, whiteBishop, whiteKing, whiteKnight, whitePawn, whiteQueen, whiteRook } from "../piece.js";
import { ROOT_DIV, sqrData } from "../../utils/G_Constants.js";
import { updateData } from "../../utils/updateSqrData.js";

function piece(board){
    board.forEach(rows => {
        rows.forEach(sqr => {
            if(sqr.piece){
                const square = document.querySelector("#" + sqr.id);
                const img = document.createElement("img");
                img.className = "piece";
                img.src = sqr.piece.img;
                square.appendChild(img);
            }
        });
    });
}


export function initGame(board){
    console.log(board);
    
    board.forEach(rows => {    
        const row = document.createElement("div");
        row.className = "row";
        rows.forEach(sqr => {
            const square = document.createElement("div");
            square.className = `square ${sqr.color}`;
            square.id = sqr.id;

            if(sqr.id[1] == 7) sqr.piece = blackPawn(sqr.id);
            if(sqr.id[1] == 2) sqr.piece = whitePawn(sqr.id);
            
            if(sqr.id == 'a8'|| sqr.id == 'h8') sqr.piece = blackRook(sqr.id);
            if(sqr.id == 'b8'|| sqr.id == 'g8') sqr.piece = blackKnight(sqr.id);
            if(sqr.id == 'c8'|| sqr.id == 'f8') sqr.piece = blackBishop(sqr.id);
            if(sqr.id == 'd8') sqr.piece = blackQueen(sqr.id);
            if(sqr.id == 'e8') sqr.piece = blackKing(sqr.id);

            if(sqr.id == 'a1'|| sqr.id == 'h1') sqr.piece = whiteRook(sqr.id);
            if(sqr.id == 'b1'|| sqr.id == 'g1') sqr.piece = whiteKnight(sqr.id);
            if(sqr.id == 'c1'|| sqr.id == 'f1') sqr.piece = whiteBishop(sqr.id);
            if(sqr.id == 'd1') sqr.piece = whiteQueen(sqr.id);
            if(sqr.id == 'e1') sqr.piece = whiteKing(sqr.id);

            row.appendChild(square);
        });
        ROOT_DIV.appendChild(row);       
    });
    piece(board);
}

export function highlightSquare() {
    sqrData.forEach((sqr) => {
        if(sqr.highlight){
            const squareDiv = document.getElementById(sqr.id);
            if (squareDiv) {
                const span = document.createElement("span");
                span.className = "highlight";
                squareDiv.appendChild(span);
            } 
        }
    })
}

export function clearHighlight(){
    sqrData.forEach((sqr) =>{
        if(sqr.highlight){
            sqr.highlight = false;
            const square = document.getElementById(sqr.id);
            const span = square.querySelector(".highlight");
            span.remove();
        }
    })
}

export function movePieceTo(targetId,selectedSqr){
    clearHighlight();
    const targetSquare =  document.getElementById(targetId);
    const currentSquare = document.getElementById(selectedSqr.id);
    const piece = currentSquare.querySelector(".piece");
    
    updateData(targetId,selectedSqr.id);

    targetSquare.appendChild(piece); 
}



