var x=0;
function sc(){
  x--;
  $(".main-image > img").css("position","absolute");
  $(".main-image > img").eq(0).css("left",x+"px");
  var w=$(".main-image > img").width();
 $(".main-image > img").eq(1).css("left",x+w+"px"); 
  if(x<=-w){
    x=0;
  }
  setTimeout("sc()",20);
}
setTimeout("sc()",10);

$(".header-sagasu,.sagasu").mouseover(function(){
  $(".sagasu").addClass("active");
});
$(".header-sagasu,.sagasu").mouseout(function(){
  $(".sagasu").removeClass("active");
});

$(".header-login,.log").mouseover(function(){
  $(".log").addClass("active");
});
$(".header-login,.log").mouseout(function(){
  $(".log").removeClass("active");
});

$(".main-image_2 img").mouseover(function(){
  $(this).attr("src","https://school2.oohara.jp/hanae/btn_welcome_on.png")
});
$(".main-image_2 img").mouseout(function(){
  $(this).attr("src","https://school2.oohara.jp/hanae/btn_welcome_off.png")
});

$(function(){
  var mujin=$(".mujin").offset().top;
  var camp=$(".camp").offset().top;
  var muraokosi=$(".muraokosi").offset().top;
  console.log(mujin+":"+camp+":"+muraokosi);
$(window).scroll(function(){
  var sc=$(window).scrollTop()+$(window).outerHeight()-400;
  if(sc>mujin){
  $(".mujin-waku").addClass("mujin-anime");  
  }else{
   $(".mujin-waku").removeClass("mujin-anime"); 
  }
  if(sc>camp){
  $(".camp-waku").addClass("camp-anime");  
  }else{
   $(".camp-waku").removeClass("camp-anime"); 
  }
  if(sc>muraokosi){
  $(".muraokosi-waku").addClass("muraokosi-anime");  
  }else{
   $(".muraokosi-waku").removeClass("muraokosi-anime"); 
  }
});
});
$(".mujin-kuwasiku img").mouseover(function(){  $(this).attr("src","https://school2.oohara.jp/hanae/btn_details_on.png")
});
$(".mujin-kuwasiku img").mouseout(function(){ $(this).attr("src","https://school2.oohara.jp/hanae/btn_details_off.png")
});

$(".camp-kuwashiku img").mouseover(function(){  $(this).attr("src","https://school2.oohara.jp/hanae/btn_details_on.png")
});
$(".camp-kuwashiku img").mouseout(function(){ $(this).attr("src","https://school2.oohara.jp/hanae/btn_details_off.png")
});

$(".muraokosi-kuwashiku img").mouseover(function(){  $(this).attr("src","https://school2.oohara.jp/hanae/btn_details_on.png")
});
$(".muraokosi-kuwashiku img").mouseout(function(){ $(this).attr("src","https://school2.oohara.jp/hanae/btn_details_off.png")
});


