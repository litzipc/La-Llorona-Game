/* Declare variables below to save the different sections (divs) of your story*/
let title=document.querySelector(".title");
let findGF=document.querySelector(".story-opening");
let continueButton=document.querySelector(".buttons");
let optionOne=document.querySelector(".option-one-screen");
let kickButton=document.querySelector(".kick");
let checkButton=document.querySelector(".check");
let kickDoor=document.querySelector(".option-two-screen");
let checkOut=document.querySelector(".option-three-end");
let rejectButton=document.querySelector(".rejectLove")
let acceptButton=document.querySelector(".acceptLove")
let reject=document.querySelector(".option-one-end");
let accept=document.querySelector(".option-two-end");


// Starting page 
findGF.style.display="block";
continueButton.style.display="block";

//Page 1 
continueButton.onclick=function(){
  findGF.style.display="none";
  continueButton.style.display="none";
  title.style.display="none"
  optionOne.style.display="block";
  kickButton.style.display="block";
  checkButton.style.display="block";
}
 
checkButton.onclick=function(){
  optionOne.style.display="none";
  title.style.display="none";
  kickButton.style.display="none";
  checkButton.style.display="none";
  checkOut.style.display="block";
  
}

kickButton.onclick=function(){
  optionOne.style.display="none";
  title.style.display="none";
  kickButton.style.display="none";
  checkButton.style.display="none";
  kickDoor.style.display="block";
  rejectButton.style.display="block";
  acceptButton.style.display="block";
}

rejectButton.onclick=function(){
  optionOne.style.display="none";
  title.style.display="none";
  kickButton.style.display="none";
  checkButton.style.display="none";
  kickDoor.style.display="none";
  rejectButton.style.display="none";
  acceptButton.style.display="none";
  reject.style.display="block";
}

acceptButton.onclick=function(){
  optionOne.style.display="none";
  title.style.display="none";
  kickButton.style.display="none";
  checkButton.style.display="none";
  kickDoor.style.display="none";
  rejectButton.style.display="none";
  acceptButton.style.display="none";
  reject.style.display="none";
  accept.style.display="block";
  retry.style.display="block";
}


/*
checkOut.onclick=function(){
  
}

reject.onclick=function(){
  
}

accept.onclick=function(){
  
}
*/




/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
