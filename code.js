
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
const n=parseInt(x[0][0]);
const m=parseInt(x[0][1]);
const array=x[1].map(y=>{return parseInt(y)});
const check=[];
const answer=[];

for(let i=0; i<n; i++){
  check.push(true);
}

function recursion(n, m, array, check, now, layer, nowarray, answer){
  //console.log(check, now, layer, answer.size);
  if(layer!=0 && now==m) answer.push(nowarray.join(" "));
  if(layer>=n) return;

  for(let i=0; i<n; i++){
    if(check[i]){
      check[i]=false;
      nowarray.push(array[i]);
      recursion(n, m, array, [...check], now+array[i], layer+1, [...nowarray], answer);
      nowarray.pop();
    }
  }
}

recursion(n, m, array, [...check], 0, 0, [], answer);

console.log(answer.length);