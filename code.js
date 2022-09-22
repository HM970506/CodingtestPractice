const { FORMERR } = require('dns');

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
const n=parseInt(inputNow[0][0]);
const map=[];


for(let i=1; i<=n; i++){
  map.push(inputNow[i][0].split(""));
}

const direction=[[0,1],[1,0],[-1,0],[0,-1]];
function DFS(y, x, floor){
  let total=0;
  for(let i=0; i<4; i++){
    const nowY=y+direction[i][0];
    const nowX=x+direction[i][1];

    if(nowY>=0 && nowY<n && nowX>=0 && nowX<n&& map[nowY][nowX]=="1"){
      map[nowY][nowX]="0";
      total+=DFS(nowY, nowX, floor+1);
    }
  }
  if(total==0) return 1;
  else return total+1;
}

const cnt=[];

for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(map[i][j]=='1'){
      const dfs=DFS(i, j, 0);
      cnt.push(dfs==1 ? dfs : dfs-1);
    }
  }
}

cnt.sort((a,b)=>{if(a>b)return 1; else return -1});
console.log(cnt.length);
for(let i=0; i<cnt.length; i++){
  console.log(cnt[i]);
}