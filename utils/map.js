import { sqrData } from "./G_Constants.js";

export const sqrMap = {};

export function setSqrMap(){
    sqrData.forEach(sqr =>{
        sqrMap[sqr.id] = sqr;
    })
}