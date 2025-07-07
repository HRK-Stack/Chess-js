import { highlightInDangerSquare, highlightSquare } from "../js/render/render.js";
import { selectedSqr, setSelectedSqr, sqrData } from "../utils/G_Constants.js";
import { sqrMap } from "../utils/map.js";

export function whiteBishopClicked(sqr){
    const currPos = sqr.id;
    const col = currPos[0]; // a,b,c .. h
    const row =  parseInt(currPos[1]); //1,2 .. 8

    const directions = [
        {dcol:1 ,drow:1},
        {dcol:-1 ,drow:1},
        {dcol:1 ,drow:-1},
        {dcol:-1 ,drow:-1},
    ]

    directions.forEach(({dcol,drow}) =>{
        let colCode = col.charCodeAt(0);
        let targetRow = row;
        
        while (true) {
            colCode += dcol;
            targetRow += drow;

            let targetCol = String.fromCharCode(colCode);

            if(targetCol < 'a' || targetCol > 'h' || targetRow < 1 || targetRow >8) break;

            const id  = targetCol + targetRow;

            const square = sqrMap[id];
            if (!square) break; 

            if(square.piece == null){
                square.highlight = true;
            }
            else{
                if(square.piece.name.includes("BLACK")){
                    square.highlight = true;
                    square.inDanger = true;
                }
                break;
            }
        }
    })
    
    setSelectedSqr(sqr);
    highlightSquare();
    highlightInDangerSquare();
    
}

export function blackBishopClicked(sqr){
    const currPos = sqr.id;
    const col = currPos[0]; // a,b,c .. h
    const row =  parseInt(currPos[1]); //1,2 .. 8

    const directions = [
        {dcol:1 ,drow:1},
        {dcol:-1 ,drow:1},
        {dcol:1 ,drow:-1},
        {dcol:-1 ,drow:-1},
    ]

    directions.forEach(({dcol,drow}) =>{
        let colCode = col.charCodeAt(0);
        let targetRow = row;
        
        while (true) {
            colCode += dcol;
            targetRow += drow;

            let targetCol = String.fromCharCode(colCode);

            if(targetCol < 'a' || targetCol > 'h' || targetRow < 1 || targetRow >8) break;

            const id  = targetCol + targetRow;

            const square = sqrMap[id];

            if(square.piece == null){
                square.highlight = true;
            }
            else{
                if(square.piece.name.includes("WHITE")){
                    square.highlight = true;
                    square.inDanger = true;
                }
                break;
            }
        }
    })
    
    setSelectedSqr(sqr);
    highlightSquare();
    highlightInDangerSquare();
    
}