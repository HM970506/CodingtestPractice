
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



function recursion(n, m, layer, array, check){
if(layer>=m) {console.log(array.sort(
    (a, b)=>{if(a>b)return 1; else return -1;}
).join(" ")); return;}

for(let i=layer; i<n; i++){
  
  if(check[i]){
      check[i]=false;
      array.push(i+1);
      recursion(n, m, layer+1, [...array], [...check]);
      array.pop();
  }
}
}
const x=input(real);
const check=[];

for(let i=0; i<x[0]; i++){
check.push(true);
}

recursion(x[0], x[1], 0, [], [...check]);