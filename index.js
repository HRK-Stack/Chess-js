import { initBoard } from "./data/data.js";

const ROOT_DIV = document.querySelector("#root");

const board = initBoard();

board.forEach(rows => {    
    const row = document.createElement("div");
    row.className = "row";
    rows.forEach(sqr => {
        const square = document.createElement("div");
        square.className = `square ${sqr.color}`;
        square.innerText = sqr.id;
        row.appendChild(square);
    });
    ROOT_DIV.appendChild(row);
});


