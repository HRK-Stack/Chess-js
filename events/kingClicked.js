import { highlightInDangerSquare, highlightSquare } from "../js/render/render.js";
import { setSelectedSqr } from "../utils/G_Constants.js";
import { sqrMap } from "../utils/map.js";

export function whiteKingClicked(sqr){

    const currPos = sqr.id;
    const col = currPos[0]; // a,b,c .. h
    const row =  parseInt(currPos[1]); //1,2 .. 8


    const directions = [
        //rook
        {dcol:0 ,drow:1},//up
        {dcol:0 ,drow:-1},//down
        {dcol:1 ,drow:0},//right
        {dcol:-1 ,drow:0},//left
        //bishop
        {dcol:1 ,drow:1},
        {dcol:-1 ,drow:1},
        {dcol:1 ,drow:-1},
        {dcol:-1 ,drow:-1},
    ]


    directions.forEach(({dcol,drow}) =>{
        let colCode = col.charCodeAt(0);
        let targetRow = row;

        colCode += dcol;
        targetRow += drow;

        let targetCol = String.fromCharCode(colCode);

        if(targetCol >= 'a' && targetCol <= 'h' && targetRow >= 1 && targetRow <= 8){
            const id  = targetCol + targetRow;

            const square = sqrMap[id];

            if(square.piece == null){
                square.highlight = true;
            }
            else{
                if(square.piece.name.includes("BLACK")){
                    square.highlight = true;
                    square.inDanger = true;
                }
            }
        }

    })
        
    setSelectedSqr(sqr);
    highlightSquare();
    highlightInDangerSquare(); 
}

export function blackKingClicked(sqr){

    const currPos = sqr.id;
    const col = currPos[0]; // a,b,c .. h
    const row =  parseInt(currPos[1]); //1,2 .. 8


    const directions = [
        //rook
        {dcol:0 ,drow:1},//up
        {dcol:0 ,drow:-1},//down
        {dcol:1 ,drow:0},//right
        {dcol:-1 ,drow:0},//left
        //bishop
        {dcol:1 ,drow:1},
        {dcol:-1 ,drow:1},
        {dcol:1 ,drow:-1},
        {dcol:-1 ,drow:-1},
    ]


    directions.forEach(({dcol,drow}) =>{
        let colCode = col.charCodeAt(0);
        let targetRow = row;

        colCode += dcol;
        targetRow += drow;

        let targetCol = String.fromCharCode(colCode);

        if(targetCol >= 'a' && targetCol <= 'h' && targetRow >= 1 && targetRow <= 8){
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
            }
        }

    })
        
    setSelectedSqr(sqr);
    highlightSquare();
    highlightInDangerSquare(); 
}

