
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


function recursion(n, m, layer, string, array, check, answer){
  if(layer>=m) {
    if(!answer.includes(string.join(" "))) answer.push(string.join(" ")); 
  return;}
  for(let i=0; i<n; i++){
    if(check[i]){
      check[i]=false;
      string.push(array[i]);
      recursion(n, m, layer+1, [...string], array, [...check], answer);
      string.pop();
    }
  }
}
const x=inputs(real);
const array=x[1].sort((a,b)=>{if(parseInt(a)>parseInt(b))return 1; else return -1});
const check=[];
const answer=[];

for(let i=0; i<x[0][0]; i++){
  check.push(true);
}

recursion(x[0][0], x[0][1], 0, [], array, check, answer);

console.log(answer.join("\n"));