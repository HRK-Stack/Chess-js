import { blackBishop, blackKing, blackKnight, blackPawn, blackQueen, blackRook, whiteBishop, whiteKing, whiteKnight, whitePawn, whiteQueen, whiteRook } from "../js/piece.js";
import { sqrData } from "./G_Constants.js";

export function updateData(targetId,currentId){

    const pieceName =  sqrData.find(sqr => sqr.id == currentId).piece.name;

    sqrData.forEach(sqr => {
        if(sqr.id == targetId && pieceName == "WHITE_PAWN") sqr.piece = whitePawn(targetId);
        if(sqr.id == targetId && pieceName == "WHITE_ROOK") sqr.piece = whiteRook(targetId);
        if(sqr.id == targetId && pieceName == "WHITE_KNIGHT") sqr.piece = whiteKnight(targetId);
        if(sqr.id == targetId && pieceName == "WHITE_BISHOP") sqr.piece = whiteBishop(targetId);
        if(sqr.id == targetId && pieceName == "WHITE_QUEEN") sqr.piece = whiteQueen(targetId);
        if(sqr.id == targetId && pieceName == "WHITE_KING") sqr.piece = whiteKing(targetId);

        if(sqr.id == targetId && pieceName == "BLACK_PAWN") sqr.piece = blackPawn(targetId);
        if(sqr.id == targetId && pieceName == "BLACK_ROOK") sqr.piece = blackRook(targetId);
        if(sqr.id == targetId && pieceName == "BLACK_KNIGHT") sqr.piece = blackKnight(targetId);
        if(sqr.id == targetId && pieceName == "BLACK_BISHOP") sqr.piece = blackBishop(targetId);
        if(sqr.id == targetId && pieceName == "BLACK_QUEEN") sqr.piece = blackQueen(targetId);
        if(sqr.id == targetId && pieceName == "BLACK_KING") sqr.piece = blackKing(targetId);

        if(sqr.id == currentId) sqr.piece = null;
    });
}