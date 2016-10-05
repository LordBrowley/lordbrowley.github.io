function quiz() {
  var one = prompt ("is thomas bad at cs?");
  if(one === "yes") {
    alert("correct!")
  }
  else {
    alert("wrong!");
  }


var two = prompt ("should thomas get gud?");
  if(two === "yes"){
    alert("correct!")
  }
  else  {
    alert("wrong!");
  }
  
 var three = prompt ("can thomas awp?");
  if(three === "no"){
    alert("correct!")
  }
  else {
    alert("wrong!");
  }
  
 var four = prompt ("does thomas have a good inven?");
  if(four === "no"){
    alert("correct!")
  }
  else {
    alert("wrong!");
  }
  
 var five = prompt ("is thomas worse than brennan?");
  if(five === "yes"){
    alert("correct!")
  }
  else {
    alert("wrong!");
  }
  
  var score = 0;
  if(one === "yes") {score +1}
  else {score -1};
  if(two === "yes") {score +1}
  else {score -1};
  if(three === "no") {score +1}
  else {score -1};
  if(four === "no") {score +1}
  else {score -1};
  if(five === "yes") {score +1}
  else {score -1};
}