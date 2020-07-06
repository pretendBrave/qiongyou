// 获取图片li的类名
var items=document.getElementsByClassName('item');
console.log(items)
// 获取上一张按钮的id
var btnLeft=document.getElementById("goPre");
console.log(btnLeft)
// 获取下一张按钮的id
var btnRight=document.getElementById("goNext");
console.log(btnRight);
// 获取图片显示的数字的类名
var point=document.getElementsByClassName("point");
console.log(point)

// index 表示当前是第几张图片
var index=0;
// 定义定时器
var time=0;
// 定义清除上一张的方法
var clearActive=function(){
  for(var i=0;i<items.length;i++){
      items[i].className="item";
  }
}
// 定义共用方法
var goIndex=function(){
  // 先清除当前图片之前其它图片的active
  clearActive();
  console.log(index)
  items[index].className="item active"
}

// 上一张
var goPre=function(){
  if(index==0){
     index=3;
  }else{
    index--;
  }
  goIndex();
}
// 下一张
var goNext=function(){
  if(index<3){
    index++;
  }else{
    index=0;
  }
  goIndex();
}

btnLeft.addEventListener("click",function(){
  goPre();
  time=0
})
btnRight.addEventListener("click",function(){
  goNext();
  time=0
})
// 设置定时器方法
setInterval(function(){
  // 先time++
   time++;
  //  如果time==40时
    if(time==40){
      // 条用goNext 下一张方法
      goNext();
      // 然后清0
      time=0;
    }
},100)
// ..............nav....................
// inpu输入框
selectShow("search","input");
// 二级菜单显示
selectShow("select-show","secondary-menu");
// 三级菜单显示
selectShow("menu-list","level-menu");
// 商城
selectShow("shopping","shopping-menu");
// 酒店
selectShow('hotel','hotel-menu');
// 扫码下载
selectShow("scan","show")
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
//...................选项卡...........................
// 轮播图选项卡
selectList("tabs","dibiao");

function selectList(selectTitle,selectCon){
  // 找到切换选项卡的目标
  var tabs=document.getElementById(selectTitle);
  var select_title=tabs.querySelectorAll("ul>li");
  var select_active=document.querySelectorAll("ul>li>a");
  console.log( select_title)
  // 找到被激活的目标
  var select_con=document.getElementById(selectCon).getElementsByClassName("call");
  // 默认让select_con下的第一个显示
  select_con[0].style.display="block"; 
  // for循环 select_title
  for(var i=0;i<select_title.length;i++){
    (function(i){
      select_title[i].onclick=function(){
        for(var j=0;j<select_title.length;j++){
          select_title[j].className="";
          select_con[j].style.display="none";
        }
        this.className="active";
        select_active.className="active"
        select_con[i].style.display="block";
      }
    })(i)
  } 
}


// 登录弹窗
var popup=document.getElementById("show_login");

var show_up=document.getElementById("login");

var close=document.getElementById("close");

var mask=document.getElementById("mask");
popup.onclick=function(){
  login.style.display="block";
  mask.style.display="block"
}
close.onclick=function(){
  login.style.display="none";
  mask.style.display="none"
}

// window.onscroll=function(){
//   //  首先获得页面上方滚动超出的距离
//    scrollTop=document.documentElement.scrollTop|| document.body.scrollTop;
//    console.log(scrollTop)
//   //  如果滚动距离>=300,就显示返回顶部按钮
//    if(scrollTop>=600){
//     searchs.style.display="block";
//    }else{//否则,如果滚动距离<500,就隐藏返回顶部按钮
//     searchs.style.display="none"
//    }
//  }




show(sidebar);
var scrollTop=0;
  // 当页面滚动时
   function show(formal){
    window.onscroll=function(){
      //  首先获得页面上方滚动超出的距离
       scrollTop=document.documentElement.scrollTop|| document.body.scrollTop;
       console.log(scrollTop)
      //  如果滚动距离>=300,就显示返回顶部按钮
       if(scrollTop>=300){
        formal.style.display="block";
       }else{//否则,如果滚动距离<500,就隐藏返回顶部按钮
        formal.style.display="none"
       }
     }

   }

     toTop.onclick=function(e){
      e.preventDefault();
     //  window.scrollTo(0,0)
     //  总距离
     var dist=scrollTop;
     // 总步数
     var steps=200;
     // 总时间
     var dura=500;
     // 每步走多长:总距离/走步数
     var step=dist/steps
     // 每步间隔的时间:总时间/总步数
     var interval=dura/steps
 // 启动周期性定时器函数
   var timer = setInterval(function(){
       // 每次让网页滚动回指定的一步距离
       window.scrollBy(0,-step)
       // 每走一步,把步数-1
       steps--;
       // 如果所有步数走完了,说明走到头了
       if(steps==0){
         // 停止定时器,不要再走了
         clearInterval(timer)
         // 将记录总步数的变量还原回初始值,为下次移动做准备
         steps=500
       }
     },interval)//每个一步的时间就移动一次
    }