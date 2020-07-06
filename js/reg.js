var back=document.getElementsByClassName("qui-loginFeedback")
console.log(back)
var btn=document.getElementsByClassName("js-btn")
console.log(btn)
var cnts=document.getElementsByClassName("cnt")
console.log(cnts)

btn.onclick=function(){
  cnts.style.opacity=1
  cnts.style.width="247px";
  // btn.style.background-position =40 0
}