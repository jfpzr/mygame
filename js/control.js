$(function(){
	$("#black").click(function(){
		$(this).css("display","none");
		beginGame();
	 })
})
function beginGame(){
 y=80,c=0;
 createcloud();
 
 $("#up").click(function(){
	 up();
	 })
 $("#down").click(function(){
	 down();
	 })

	 timer1=setInterval("cloud('cloud1')",10);
	 timer2=setInterval("cloud('cloud2')",10);
	 timer3=setInterval("cloud('cloud3')",10);
	 timer4=setInterval("cloud('cloud4')",10);
	 timer5=setInterval("count()",200);
	 timer6=setInterval("bird()",50);
	 timer7=setInterval("house()",50);
}
//统计飞行的路程
function count(){
	$("#count font").html(c);
	c=c+10;
  if(c>=6000){
	  $("#black p").html("恭喜你，挑战成功，你总共飞行了"+c+"米！<br />点击重新开始游戏");
	  $("#black").show();
	  stop();
	  $("#black").click(function(){
		location.reload();
	 })
  };
}

//控制鸟的飞行
function bird(){
	x0=$("#bird").css("left");
	x0=x0.substring(0,x0.length-2);
	x0=x0-15;
  $("#bird").css("left",x0+"px");
  if(isOverlap("plane","bird")){
	  $("#black p").html("挑战失败，你共飞行了"+c+"米<br />点击重新开始游戏");
	  $("#black").show();
	  stop();
	  $("#black").click(function(){
		location.reload();
	 })
  };
  if(x0<-45){
	  $("#bird").css("left","640px");
  }
}

//控制云层的运动
function cloud(cloudid){
	var x=$("#"+cloudid).css("left");
	x=x.substring(0,x.length-2);
	x=x-2;
  $("#"+cloudid).css("left",x+"px");
  if(isOverlap("plane",cloudid)){
	  $("#black p").html("挑战失败，你共飞行了"+c+"米<br />点击重新开始游戏");
	  $("#black").show();
	  stop();
	  $("#black").click(function(){
		location.reload();
	 })
  };
  if(x<-90){
	  //alert(x);
	  $("#"+cloudid).css("left","1280px");
	  var y0=(Math.random()+0.1)*200;
	  $("#"+cloudid).css("top",y0+"px");
  }
}

//控制房子的运动
function house(){
	xh=$("#house").css("left");
	xh=xh.substring(0,xh.length-2);
	xh=xh-10;
  $("#house").css("left",xh+"px");
  if(isOverlap("plane","house")){
	  $("#black p").html("挑战失败，你共飞行了"+c+"米<br />点击重新开始游戏");
	  $("#black").show();
	  stop();
	  $("#black").click(function(){
		location.reload();
	 })
  };
}

//判断两个物体是否碰撞
function isOverlap(idOne,idTwo){
        var objOne=$("#"+idOne),
            objTwo=$("#"+idTwo),
            offsetOne = objOne.offset(),
            offsetTwo = objTwo.offset(),
            topOne=offsetOne.top,
            topTwo=offsetTwo.top,
            leftOne=offsetOne.left,
            leftTwo=offsetTwo.left,
            widthOne = objOne.width()-15,
            widthTwo = objTwo.width()-15,  //减少png图片的检测误差
            heightOne = objOne.height()-15,
            heightTwo = objTwo.height()-15;
        var leftTop = leftTwo > leftOne && leftTwo < leftOne+widthOne 
                && topTwo > topOne && topTwo < topOne+heightOne,
            rightTop = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne 
                && topTwo > topOne && topTwo < topOne+heightOne,
            leftBottom = leftTwo > leftOne && leftTwo < leftOne+widthOne 
                && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne,
            rightBottom = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne 
                && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne;
        if(leftTop || rightTop || leftBottom || rightBottom){return true} return false;
}

//控制飞机的上升
function up(){
	y=y-18;
    if(y<0){y=0;}
  $("#plane").css("top",y+"px");
}
//控制飞机的下降
function down(){
	y=y+18;
  $("#plane").css("top",y+"px");
    if(y>340){
	  $("#black p").html("挑战失败，你共飞行了"+c+"米<br />点击重新开始游戏");
	  $("#black").show();
	  stop();
	  $("#black").click(function(){
		location.reload();
	 })
	}
}
	 

//控制云层的高度
function createcloud(){
	var y1=(Math.random()/2+0.5)*50;
	var y2=(Math.random()/2+0.5)*150;
	var y3=(Math.random()/2+0.5)*100;
	var y4=(Math.random()/2+0.5)*200;
	$("#cloud1").css("top",y1+"px");
	$("#cloud2").css("top",y2+"px");
	$("#cloud3").css("top",y3+"px");
	$("#cloud4").css("top",y4+"px");
	}
	
//飞机停止飞行
function stop(){
	clearInterval(timer1);
	clearInterval(timer2);
	clearInterval(timer3);
	clearInterval(timer4);
	clearInterval(timer5);
	clearInterval(timer6);
	clearInterval(timer7);
}
