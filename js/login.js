// 登录切换
selectControl("control","con_all");
function selectControl(selectLi,selectLogin){
  var select_li=document.getElementById(selectLi).getElementsByTagName("li");
  console.log(select_li)
  var select_show=document.getElementsByClassName(selectLogin)
  console.log(select_show)

  select_show[0].style.display="block";

  for(var i=0;i<select_li.length;i++){
    (function(i){
      select_li[i].onclick=function(){
        for(var j=0;j<select_li.length;j++){
         select_li[j].className="";
          select_show[j].style.display="none";
        }
        this.className="active";
        select_show[i].style.display="block";
        
      }
    })(i)
  } 
}