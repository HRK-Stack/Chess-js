import { initBoard } from "../js/board.js"

export const board = initBoard();

export const ROOT_DIV = document.querySelector("#root");

export const sqrData = board.flat();

export let selectedSqr = {};

export function setSelectedSqr(sqr){
    selectedSqr = sqr;
}
