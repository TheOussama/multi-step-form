let form1 =document.querySelector("#form1");
let form2 =document.querySelector("#form2");
let form3 =document.querySelector("#form3");
let next1 =document.querySelector("#next1");
let next2 =document.querySelector("#next2");
let back1 =document.querySelector("#back1");
let back2 =document.querySelector("#back2");
let progress =document.querySelector("#progress");
const inputs = document.querySelectorAll("input");



slide(progress,next1,form1,form2,"-450px","40px","240px");
slide(progress,back1,form1,form2,"40px","450px","120px");
slide(progress,next2,form2,form3,"-450px","40px","360px");
slide(progress,back2,form2,form3,"40px","450px","240px");

    
function slide(progress,link,form1,form2,leftform1,leftform2,width){
      link.addEventListener("click",()=>{
      form1.style.left =leftform1;
      form2.style.left =leftform2;
      progress.style.width=width;
      })
    }



function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");

}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
 });