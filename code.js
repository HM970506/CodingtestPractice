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
const testCaseNum=inputNow.shift()[0];

const maps=[];

while(inputNow.length){
   const now= inputNow.shift();
   const nowX=parseInt(now[0]);
   const nowY=parseInt(now[1]);
   const node=parseInt(now[2]);
   const map=[];

   for(let j=0; j<nowY; j++){
    map.push(new Array(nowX).fill(0));
   }

   for(let j=0; j<node; j++){
      const nowNode=inputNow.shift();
      map[nowNode[1]][nowNode[0]]=1;
   }
   maps.push(map);

}

const direction=[[1, 0],[0, 1],[-1, 0],[0, -1]];
const answer=[];

for(const map of maps){
  let cnt=0;
  for(let i=0; i<map.length; i++){
    for(let j=0; j<map[0].length; j++){
      if(map[i][j]==1) {
        DFS(i, j, map);
        cnt++;
      }
    }
  }
  answer.push(cnt);
}


function DFS(y, x, map){
  //console.log(map);
  for(let k=0; k<4; k++){
    const nowY=direction[k][0]+y;
    const nowX=direction[k][1]+x;
    //console.log(nowY, nowX);
    if(nowY>=0 && nowY<map.length && nowX>=0 && nowX<map[0].length && map[nowY][nowX]==1){
      map[nowY][nowX]=0;
      //console.log(map);
      DFS(nowY, nowX, map);
    }
  }

}

for(const ans of answer){
console.log(ans);
}