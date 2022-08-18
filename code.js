
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
const time=[];
const money=[];

for(let i=1; i<x.length; i++){
  time.push(parseInt(x[i][0]));
  money.push(parseInt(x[i][1]));
}

let max=0;

function recursion(n, time, money, index, total, test){
  //console.log( test, index);
  if(index>n) return;
  if(total>max) max=total;

  for(let i=index; i<n; i++){
    if(time[i]>0 && index+time[i]<=n+1){
      const nowTime=[...time];
      test.push([nowTime[i], money[i]]);
      nowTime[i]=0;
      recursion(n, nowTime, money, i+time[i],total+money[i], [...test]);
      test.pop();
      }
    }
}

recursion(n,time, money, 0,0, []);

console.log(max);