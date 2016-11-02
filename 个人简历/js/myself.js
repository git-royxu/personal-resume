/**动态调整背景图片大小**/
var heights=document.documentElement.clientHeight;
window.onresize=function(){
  heights=document.documentElement.clientHeight;
  $("#nav").height(heights);
  $(".bg").height(heights);
}
$("#nav").height(heights);
$(".bg").height(heights);

//当鼠标滚动一个屏幕大小时，导航栏背景出现
$(window).scroll(function(){
  var top=$(this).scrollTop();
  if(top>0){
    $("#header").attr('class','bgchange');
    if(top>=heights/2&&top<heightAbout/2+heights){
      $("#about").addClass("move").siblings(".move").removeClass("move");
      $(".toTop").fadeIn();
    }else if(top<heights/2){
      $("#home").addClass("move").siblings(".move").removeClass("move");
      $(".toTop").fadeOut(1);
    }else if(top>=heights+heightAbout/2){
      $("#skills").addClass("move").siblings(".move").removeClass("move");
    }
  }else{
    $("#header").attr('class','');
  }
});

/**当大于当前屏幕高度时候，弹出toTop框，并点击能够回到顶部**/
$(".toTop").click(function(){
  $("body").animate({
    scrollTop:0
  },1000);
});


/**点击home标签，屏幕滚动至最上方**/
$("#home").click(function(e){
  e.preventDefault();
  $("body").animate({
    scrollTop:0
  },1000);
});

/**点击learn more屏幕向下滚动至about me处**/
$(".btn1").click(function(){
  $("body").animate({
    scrollTop:heights
  },1000);
});

/**点击about标签时，屏幕向下滚动至about me处**/
$("#about").click(function(e){
  e.preventDefault();
  $("body").animate({
    scrollTop:heights
  },1000);
});

/**当屏幕滚动至一个屏幕高度的时候 about me动画执行**/
$(window).scroll(function(){
  if($(this).scrollTop()>=heights*(3/4)){
    $(".Creative").animate({opacity:1},1000);
    $(".Positive").delay(300).animate({opacity:1},1000);
    $(".professional").delay(600).animate({opacity:1},1000);
  }
});


var heightAbout=$(".about").height()+60;
/**点击skill标签时，屏幕向下滚动至my skills处**/
$("#skills").click(function(e){
  e.preventDefault();
  $("body").animate({
    scrollTop:heights+heightAbout
  },1000);
});


var c1=document.querySelector("#c1");
var ctxHtml=c1.getContext('2d');
/**个人能力————重构函数**/
function can(x,y,max){
    var degree=0;
    var num=0;
    var timer=setInterval(function(){
      ctxHtml.clearRect(x-110,y-110,220,220);
      /**创建外边框圆环**/
      ctxHtml.strokeStyle="#fff";
      ctxHtml.lineWidth=14.2;
      ctxHtml.beginPath();
      ctxHtml.arc(x,y,80,0,2*Math.PI);
      ctxHtml.stroke();

      /**创建圆环动画*/
      degree+=3.6;
      ctxHtml.lineWidth=15;
      ctxHtml.strokeStyle="#6AB36E";
      ctxHtml.beginPath();
      ctxHtml.arc(x,y,80,-80*Math.PI/160,-90*Math.PI/180+degree*Math.PI/180);
      ctxHtml.stroke();

      /**数字变化**/
      num++;
      var text=num+"%";
      ctxHtml.font = "bold 49px Arial";
      ctxHtml.fillStyle = '#FFF';
      ctxHtml.textAlign = 'center';
      ctxHtml.textBaseline = 'middle';
      ctxHtml.fillText(text, x, y);
      if(num>=max){
        clearInterval(timer);
      }
    },30);
}
/**HTML5**/
function html5(){
  can(150,100,87);
  var img1=new Image();
  img1.src="img/Html.png";
  img1.onload=function(){
    ctxHtml.drawImage(img1,55,210,50,50);
  }
  var text1="HTML5";
  ctxHtml.font = "bold 30px Arial";
  ctxHtml.fillStyle = '#6ECADC';
  ctxHtml.textAlign = 'center';
  ctxHtml.textBaseline = 'middle';
  ctxHtml.fillText(text1,160,235);
}

/**CSS3**/
function css3(){
  can(600,100,83);
  var img2=new Image();
  img2.src="img/CSS.png";
  img2.onload=function(){
    ctxHtml.drawImage(img2,515,205,50,50);
  }
  var text2="CSS3";
  ctxHtml.font = "bold 30px Arial";
  ctxHtml.fillStyle = '#E9A820';
  ctxHtml.textAlign = 'center';
  ctxHtml.textBaseline = 'middle';
  ctxHtml.fillText(text2,610,235);
}

/**JS**/
function js(){
  can(1050,100,75);
  var img3=new Image();
  img3.src="img/JS.png";
  img3.onload=function(){
    ctxHtml.drawImage(img3,945,200);
  }
  var text3="JavaScript";
  ctxHtml.font = "bold 30px Arial";
  ctxHtml.fillStyle = '#fff';
  ctxHtml.textAlign = 'center';
  ctxHtml.textBaseline = 'middle';
  ctxHtml.fillText(text3,1080,235);
}

/**jQuery**/
function jquery(){
  can(150,370,77);
  var img4=new Image();
  img4.src="img/jq.png";
  img4.onload=function(){
    ctxHtml.drawImage(img4,55,475,50,40);
  }
  var text4="jQuery";
  ctxHtml.font = "bold 30px Arial";
  ctxHtml.fillStyle = '#0567AC';
  ctxHtml.textAlign = 'center';
  ctxHtml.textBaseline = 'middle';
  ctxHtml.fillText(text4,160,495);
}

/***ANGULARJS*/
function angulajs(){
  can(600,370,80);
  var img5=new Image();
  img5.src="img/angulajs.png";
  img5.onload=function(){
    ctxHtml.drawImage(img5,500,477,50,50);
  }
  var text5="NGULARJS";
  ctxHtml.font = "bold 30px Arial";
  ctxHtml.fillStyle = '#B82932';
  ctxHtml.textAlign = 'center';
  ctxHtml.textBaseline = 'middle';
  ctxHtml.fillText(text5,635,505);
}

/**Bootstrap**/
function bootstrap(){
  can(1050,370,80);
  var img6=new Image();
  img6.src="img/bootstrap.png";
  img6.onload=function(){
    ctxHtml.drawImage(img6,968,475,45,45);
  }
  var text6="ootstrap";
  ctxHtml.font = "bold 30px Arial";
  ctxHtml.fillStyle = '#220F3C';
  ctxHtml.textAlign = 'center';
  ctxHtml.textBaseline = 'middle';
ctxHtml.fillText(text6,1075,500);
}

/**滚动条加载动画**/
(function canvas(){
  var isFirst=true;
  $(window).scroll(function(){
    var tops=$(this).scrollTop();
    if(isFirst){
      if(tops>=heights+heightAbout/3){
        html5();
        css3();
        js();
        jquery();
        angulajs();
        bootstrap();
        isFirst=false;
      }
    }
  });
})();






