import { initGame } from "./render/render.js";
import { board } from "../utils/G_Constants.js";
import { globalEvent } from "../events/global.js";

initGame(board);
globalEvent();



