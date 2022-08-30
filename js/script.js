// button click handler
var flag=0;
var move_count=9;
var arr=[];
const play = (event) => {
let v =event.target.id;

//apply event to generate new game statevar 
if(flag==0){
    flag=1;
    document.getElementById(v).value='X';
    document.getElementById(v).disabled=true;
    document.getElementById(v).innerText="X";
    // var b10=document.createTextNode("X");
    // document.getElementById("box-1").appendChild(b10);
    move_count=move_count-1;
    document.getElementById("move-count").innerText=`Moves Left: ${move_count}`;
    document.getElementById("next-player").innerText="Turn Played By:  --X--";
    arr[v]=document.getElementById(v).innerText;
    // getwinner();=
}
else{
    flag=0;
    document.getElementById(v).value='0';
    document.getElementById(v).disabled=true;
    document.getElementById(v).innerText="0";
    move_count=move_count-1;
    document.getElementById("next-player").innerText="Turn Played By:  --0--";
    arr[v]=document.getElementById(v).innerText;
    document.getElementById("move-count").innerText=`Moves Left: ${move_count}`;
    
    
}
let s =getWinner();
if(s !== -1 && s!= ""){
    document.getElementById("windis2").innerText=`Winner is ${s}`;
    arr["windis2"]=`Winner is ${s}`;
    document.getElementById("box-1").disabled=true;
     document.getElementById("box-2").disabled=true;
     document.getElementById("box-3").disabled=true;
     document.getElementById("box-4").disabled=true;
     document.getElementById("box-5").disabled=true;
     document.getElementById("box-6").disabled=true;
     document.getElementById("box-7").disabled=true;
     document.getElementById("box-8").disabled=true;
     document.getElementById("box-9").disabled=true;
     document.getElementById("windis2").disabled=true;

}
else if(move_count==0){
    document.getElementById("windis2").innerText=`Match tie`
    arr["windis2"]=`Match tie`;
}
}

function replaybutt(){
     document.getElementById("box-1").innerText="";
     document.getElementById("box-2").innerText="";
     document.getElementById("box-3").innerText="";
     document.getElementById("box-4").innerText="";
     document.getElementById("box-5").innerText="";
     document.getElementById("box-6").innerText="";
     document.getElementById("box-7").innerText="";
     document.getElementById("box-8").innerText="";
     document.getElementById("box-9").innerText="";
     document.getElementById("windis2").innerText="";
    let i=0;
    for (let k in arr) {
        // task(k);
        setTimeout(function(){document.getElementById(k).innerText=arr[k];},1000*i)
        i=i+1
    }  
}
function reloadin(){
    location.reload();
}

function getWinner() {
    let box1 = document.getElementById("box-1").innerText;
    let box2 = document.getElementById("box-2").innerText;
    let box3 = document.getElementById("box-3").innerText;
    let box4 = document.getElementById("box-4").innerText;
    let box5 = document.getElementById("box-5").innerText;
    let box6 = document.getElementById("box-6").innerText;
    let box7 = document.getElementById("box-7").innerText;
    let box8 = document.getElementById("box-8").innerText;
    let box9 = document.getElementById("box-9").innerText;
    if (box1 === box2 && box1 === box3) return box1;
    else if (box4 === box5 && box4 === box6) return box4;
    else if (box7 === box8 && box7 === box9) return box7;
    else if (box1 === box4 && box1 === box7) return box1;
    else if (box2 === box5 && box2 === box8) return box2;
    else if (box3 === box6 && box3 === box9) return box3;
    else if (box1 === box5 && box1 === box9) return box1;
    else if (box3 === box5 && box3 === box7) return box3;
    else return -1; // winner is not yet decided
  }

function enableButtons() {
}

module.exports = {play,enableButtons};
// export default play;