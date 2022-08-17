
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

const answer=[];

function recursion(n, m, layer,now, array){
  if(layer>=m) {answer.push(array); return;}
  for(let i=now; i<n; i++){
    recursion(n, m, layer+1, i, array=="" ? array+(i+1): array+" "+(i+1));
  }
}
const x=input(real);


recursion(x[0], x[1], 0,0, "");

console.log(answer.join("\n"));