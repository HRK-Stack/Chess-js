import { highlightInDangerSquare, highlightSquare } from "../js/render/render.js";
import { setSelectedSqr } from "../utils/G_Constants.js";
import { sqrMap } from "../utils/map.js";

export function whiteKnightClicked(sqr){
    const currPos = sqr.id;
    const col = currPos[0]; // a,b,c .. h
    const row =  parseInt(currPos[1]); //1,2 .. 8

    const directions = [
        {dcol:-1 ,drow:2},//up left top sqr
        {dcol:-2 ,drow:1},//up left side sqr
        {dcol:1 ,drow:2},//up right top sqr
        {dcol:2 ,drow:1},//up right side sqr
        {dcol:-1 ,drow:-2},//down left top sqr
        {dcol:-2 ,drow:-1},//down left side sqr
        {dcol:1 ,drow:-2},//down right top sqr
        {dcol:2 ,drow:-1}//down left top sqr
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
    });

    setSelectedSqr(sqr);
    highlightSquare();
    highlightInDangerSquare();
}

export function blackKnightClicked(sqr){
    const currPos = sqr.id;
    const col = currPos[0]; // a,b,c .. h
    const row =  parseInt(currPos[1]); //1,2 .. 8

    const directions = [
        {dcol:-1 ,drow:2},//up left top sqr
        {dcol:-2 ,drow:1},//up left side sqr
        {dcol:1 ,drow:2},//up right top sqr
        {dcol:2 ,drow:1},//up right side sqr
        {dcol:-1 ,drow:-2},//down left top sqr
        {dcol:-2 ,drow:-1},//down left side sqr
        {dcol:1 ,drow:-2},//down right top sqr
        {dcol:2 ,drow:-1}//down left top sqr
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
    });

    setSelectedSqr(sqr);
    highlightSquare();
    highlightInDangerSquare();
}