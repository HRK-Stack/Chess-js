import { initGame } from "./render/render.js";
import { board } from "../utils/G_Constants.js";
import { globalEvent } from "../events/global.js";
import { setSqrMap } from "../utils/map.js";

initGame(board);
globalEvent();

setSqrMap(); // call at start and store all Mappings from id to square data


