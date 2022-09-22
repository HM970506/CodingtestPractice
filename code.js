
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

const inputNow=inputs(test);
const start=inputNow[0][2];
const map=[];
const check=new Array(parseInt(inputNow[0][0])).fill(true);
for(let i=0; i<inputNow[0][0]; i++){
  map.push(new Array(parseInt(inputNow[0][0])).fill(0));
}



for(let i=1; i<inputNow.length; i++){
   map[inputNow[i][0]-1][inputNow[i][1]-1]=1;
   map[inputNow[i][1]-1][inputNow[i][0]-1]=1;
}


function DFS(now, check, floor){
  dfsArray.push(now+1);
  if(check.length==floor) return;

  for(let i=0; i<map.length; i++){
    if(map[now][i]==1 && check[i]){
      check[i]=false;
      DFS(i, check, floor+1);
    }
  }

}

const dfsArray=[];
const nowCheck=[...check];
nowCheck[start-1]=false;
DFS(start-1, [...nowCheck], 0);

function BFS(queue, check, floor){
  if(check.length==floor) return;

  const Nowqueue=[];
  while(queue.length){
    const now=queue.shift();
    for(let i=0; i<map.length; i++){
      if(map[now][i]==1 && check[i]){
        check[i]=false;
        bfsArray.push(i+1);
        Nowqueue.push(i);
      }
    }
  }

  BFS(Nowqueue, check, floor+1);
}

const bfsArray=[parseInt(start)];
BFS([start-1], [...nowCheck], 0);


console.log(dfsArray.join(" "))
console.log(bfsArray.join(" "));