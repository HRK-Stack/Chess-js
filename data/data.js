
function Square(color,id,piece){
    return {color,id,piece}
}

function SquareRow(rowId){

    const squareRow = [];
    const cols = ["a","b","c","d","e","f","g","h"];

    if(rowId % 2 == 0){
        cols.forEach((col,i) => {
            if(i%2 == 0){
                squareRow.push(Square("white",col+rowId,null));
            }else{
                squareRow.push(Square("black",col+rowId,null));
            }
        });
    }else{
        cols.forEach((col,i) => {
            if(i%2 == 0){
                squareRow.push(Square("black",col+rowId,null));
            }else{
                squareRow.push(Square("white",col+rowId,null));
            }
        });
    }

    return squareRow;
}

export function initBoard(){

    const board = [];
    
    for(let i=8 ; i>0 ;i--){
        board.push(SquareRow(i));
    }

    return board;
}