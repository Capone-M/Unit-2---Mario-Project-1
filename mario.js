
function printPyramid(height) {
    
    let emptySpace = "";
    let brick = "##"
    for (let i = 0; i < height; i++){
        emptySpace = emptySpace+" "
    }
    for (let i = 0; i < height; i++){
        layer = emptySpace + brick
        console.log(layer);
         emptySpace = emptySpace.substring(1);
        brick = brick + "#"
    }

}

printPyramid(prompt("How tall do you want your pyramid to be? (Please give your answer as a whole Number)"));

