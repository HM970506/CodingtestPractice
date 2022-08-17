
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



function recursion(n, m, layer, string, check){
if(layer>=m) {console.log(string.slice(0, string.length-1)); return;}
for(let i=0; i<n; i++){
  if(check[i]){
      check[i]=false;
      recursion(n, m, layer+1,string+(i+1)+" ", [...check]);
      check[i]=true;
  }
}
}
const x=input(real);
const check=[];

for(let i=0; i<x[0]; i++){
check.push(true);
}

recursion(x[0], x[1], 0, "", [...check]);