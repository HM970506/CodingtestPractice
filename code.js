
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


function recursion(n, m, now, layer, string, array, answer){
  if(layer>=m) {answer.push(string.join(" ")); return;}
  for(let i=now; i<n; i++){
      string.push(array[i]);
      recursion(n, m,i, layer+1, [...string], array, answer);
      string.pop();
  }
}
const x=inputs(test);
const array=Array.from(new Set(x[1])).sort((a,b)=>{if(parseInt(a)>parseInt(b))return 1; else return -1});
const answer=[];


recursion(array.length, x[0][1], 0, 0, [], array, answer);

console.log(Array.from(new Set(answer)).join("\n"));