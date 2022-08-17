

function input(path){
    //한 줄인 경우
    let fs = require('fs');
    let input = fs.readFileSync(path).toString().split(' ');
    
    return input;
    }
    
function inputs(path){
    //여러 줄인 경우
    let fs = require('fs');
    let input = fs.readFileSync(path).toString().split("\n");
    let inputs = [];
    
    for (let i =0; i < input.length; i++) {
      if (input[i] !== '') {
        inputs.push(input[i].replace("\r","").split(' '));
      }
    }
    
    return inputs;
}

const test="./input.txt"
const real="/dev/stdin"


const x=inputs(test);

