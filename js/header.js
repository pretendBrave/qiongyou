// inpu输入框
selectShow("search","input");
// 二级菜单显示
selectShow("select-show","secondary-menu");
// 三级菜单显示
selectShow("menu-list","level-menu");
// 商城
selectShow("shopping","shopping-menu");
// 酒店
selectShow('hotel','hotel-menu')
// 下拉弹窗
function selectShow(eTitle,eContent){
  // 获取鼠标移入显示子元素的父元素
  var eTitle=document.getElementById(eTitle);
  console.log(eTitle)
  // 获取被显示的子元素
  var eContent=document.getElementById(eContent);
  console.log(eContent)
  // 鼠标移入父元素时
  eTitle.onmouseover=function(){
      // 获取子元素eContent的属性display的状态
      var dropStyle=getComputedStyle(eContent).display;
      // 如果子元素dropStyle的属性值为none
      if(dropStyle=='none'){
          // 就让econtent的display显示
      eContent.style.display="block";
     }else{
      // 否则就让econtent的display隐藏
      eContent.style.display="none";
     }
  }
  // 鼠标离开父元素时
  eTitle.onmouseout=function(){
       // 获取子元素eContent的属性display的状态
     var dropStyle=getComputedStyle(eContent).display;
      // 如果子元素dropStyle的属性值为none
     if(dropStyle=="none"){
      // 就让econtent的display显示
      eContent.style.display="block"
     }else{
      // 否则就让econtent的display隐藏
      eContent.style.display="none";

     }
  }
}