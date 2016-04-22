'use strict';

/**
 * @ngdoc function
 * @name laboratoryHomepageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the laboratoryHomepageApp
 */
angular.module('laboratoryHomepageApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $(function(){
  /*Î´ÔªËØµÄÊ×Î²Ìí¼Ó²¹°×*/
  var $panels       = $('#slider .scrollContainer > li');
  var $parent=$panels.parent();//»òÐíµ±Ç°liµÄ×î½üÒ»¼¶µÄ¸¸ÔªËØ
  var $length=$panels.length;//»ñÈ¡Ö¸¶¨lengthÖµ
  var $first=$panels.eq(0).clone().addClass("panel cloned").attr("id",'panel_'+($length+1));//»ñÈ¡µÚÒ»¸öÔªËØ²¢¸´ÖÆ
  var $last=$panels.eq($length-1).clone().addClass("cloned").attr("id",'panel_0');;//»ñÈ¡×îºóÒ»¸öÔªËØ²¢¸´ÖÆ
  $parent.append($first);//½«liÐòÁÐÖÐµÄµÚÒ»¸öÌí¼Óµ½ulÔªËØÖÐµÄ×îºóÒ»¸ö  $("#slide02").scrollLeft(0);
  $parent.prepend($last);//½«liÐòÁÐÖÐµÄ×îºóÒ»¸öÌí¼Óµ½ulÔªËØÖÐµÄµÚÒ»¸ö
  var totalPanels     = $(".scrollContainer").children().size();//ËùÓÐ×ÓÔªËØµÄÊý×Ö£¬¹ö¶¯ÔªËØµÄ¸öÊý 7
  var regWidth      = $(".panel").css("width");//»ñÈ¡liÔªËØµÄ¿í¶È
  var regImgWidth     = $(".panel img").css("width");//»ñÈ¡ÆäÖÐÍ¼Æ¬µÄ¿í¶È
  var movingDistance      = 195;//Ã¿´ÎÒÆ¶¯µÄ¾àÀë
  var curWidth      = 230;//µ±Ç°ÖÐ¼äliµÄ¿í¶ÈÎª350px
  var curHeight         =312;//µ±Ç°ÖÐ¼äliµÄ¸ß¶ÈÎ´312  
  var curImgWidth  =230;
  var curImgHeight  =288;
  var othersW           =170;//ÆäËûliµÄ¿í¶È
  var othersH           =235;//¸ß¶È
  var othersImgW           =170;//ÆäËûliµÄ¿í¶È
  var othersImgH           =213;//¸ß¶È
  var $panels       = $('#slider .scrollContainer > li');//´Ë´¦×÷ÓÃÊÇ½«¸´ÖÆ½øÀ´²¹°×µÄÔªËØÖØÐÂ¸³Öµ
  var $container      = $('#slider .scrollContainer');
  $panels.css({'float' : 'left','position' : 'relative'});
  $("#slider").data("currentlyMoving", false);//ÊÇ·ñÕýÔÚÔË¶¯ÖÐ
  $container.css('width', (($panels[0].offsetWidth+25) * $panels.length) + 60 ).css('left','0');//¼ÆËãÈÝÆ÷µÄ×ÜµÄ¿í¶È PS£º25ÎªmarginÖµ offsetWidth
  var scroll = $('#slider .scroll').css('overflow', 'hidden');
  function returnToNormal(element) {//liÔªËØ·µ»Øµ½Õý³£×´Ì¬
    $(element).animate({ width: othersW,height: othersH}).find("img").animate({width:othersImgW,height:othersImgH});
  };
  function growBigger(element) {//µ±Ç°ÔªËØÖ®¼ä±ä´ó
    $(element).addClass("current").animate({ width: curWidth,height:curHeight}).siblings().removeClass("current")
    .end().find("img").animate({width:curImgWidth,height:curImgHeight})
  }
  //direction true = right, false = left
  function change(direction) {
    //if not at the first or last panel
    if((direction && !(curPanel < totalPanels-2)) || (!direction && (curPanel <= 1))) {
      return false;
    } 
    //if not currently moving
    if (($("#slider").data("currentlyMoving") == false)) {
      $("#slider").data("currentlyMoving", true);
      var next         = direction ? curPanel + 1 : curPanel - 1;
      var leftValue    = $(".scrollContainer").css("left");
      var movement   = direction ? parseFloat(leftValue, 10) - movingDistance : parseFloat(leftValue, 10) + movingDistance;
      $(".scrollContainer").stop().animate({"left": movement}, function() {
        $("#slider").data("currentlyMoving", false);
      });
      returnToNormal("#panel_"+curPanel);
      growBigger("#panel_"+next);
      curPanel = next;
      //remove all previous bound functions
      $("#panel_"+(curPanel+1)).unbind(); 
      //go forward
      $("#panel_"+(curPanel+1)).click(function(){ change(true); });
      //remove all previous bound functions                             
      $("#panel_"+(curPanel-1)).unbind();
      //go back
      $("#panel_"+(curPanel-1)).click(function(){ change(false); }); 
      //remove all previous bound functions
      $("#panel_"+curPanel).unbind();
    }
  }
  // Set up "Current" panel and next and prev ÉèÖÃµ±Ç°ÔªËØºÍÉÏÏÂ
  growBigger("#panel_1"); 
  var curPanel = 1;
  $("#panel_"+(curPanel+1)).click(function(){ change(true);return false;});
  $("#panel_"+(curPanel-1)).click(function(){ change(false);return false;});
  //when the prev/next arrows are clicked
  $("#slider .next").click(function(){ change(true);}); 
  $("#slider .prev").click(function(){ change(false);});
  $(window).keydown(function(event){//¼üÅÌ·½Ïò¼ü¿ØÖÆ
    switch (event.keyCode) {
      case 13: //enter
        $(".next").click();
      break;
      case 37: //prev arrow
        $(".prev").click();
      break;
      case 39: //next arrow
        $(".next").click();
      break;
    }
  }); 
  
});
  });
