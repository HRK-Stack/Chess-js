import { sqrData } from "./G_Constants.js";

export function clearHighlight(){
    sqrData.forEach((sqr) =>{
        if(sqr.highlight){
            sqr.highlight = false;
            const square = document.getElementById(sqr.id);
            const span = square.querySelector(".highlight");
            span.remove();
        }
    })
}