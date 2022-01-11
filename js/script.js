$(document).ready(function(){

  // skill part

    let sec_height = $(window).height();
    console.log(sec_height);
    let sec_height_half = sec_height / 2;
    console.log(sec_height_half);

    let target_svgBox_top = $("#about_me").offset().top;
    console.log(target_svgBox_top);
    
    $(window).scroll(function(){
        let $scrollTop = $(window).scrollTop();
        if($scrollTop > target_svgBox_top - sec_height_half){
            $(".myskill_box").each(function(){
                let sel_count = $(this).find(".count").text();
                $(this).find("circle:eq(1)").css("stroke-dashoffset", "calc(400 - (400 * " + sel_count + ") / 100)");
            });
        }else{
            $(".myskill_box").each(function(){
                $(this).find("circle:eq(1)").css("stroke-dashoffset", "400");
            });
        };
    });
    

    // header part

    $("header li").click(function(){
      var $index = $(this).index();
      $("header li").removeClass("active");
      $(this).addClass("active");
      $("main section").removeClass("active");
      $("main section").eq($index).addClass("active");
      $("html, body").stop().animate({scrollTop : $("main section .wrap").eq($index).offset().top}, 1000);
      $("header .menu_part").removeClass("active");
      $('.toggleBtn').removeClass("active");

      return false;
  });






    let work_top = $("#work").offset().top;
    console.log(work_top);
    
    // about me part
     
    $("#about_me .title_circle").hover(function(){
      var $title_circle = $(this).index();
      $("#about_me .title_circle").removeClass("event");
      $(this).addClass("event");
      $("#about_me ul li").removeClass("event");
      $("#about_me ul li").eq($title_circle).addClass("event");
    });

    



  // work part

    
  $(".close").click(function(){
    $(".thankyou_message").hide();
    return false;
  });




  // slider_part



  
  function counting(){
    $("#work ul li").removeClass("active");
    $("#work ul li").eq(2).addClass("active");
  };
  
  
  var $firstMove = $("#work li").eq(2).nextAll();
  
  console.log($firstMove);
  $("#work ul").prepend($firstMove);
  
  counting();


  setInterval(function(){
    var $hover = $(".slider").hasClass("hover");
    
    if($hover == true){
      // 자동 슬라이드 작동 없음
    }else{
      var $f_child = $("#work ul li").first(); 
      console.log($f_child);
      $("#work ul").stop().animate({"margin-left":"-300%"}, 1000, function(){
        $("#work ul").append($f_child).css("margin-left","-200%");
        counting();
      });
    }
  }, 3500);

  $(".slider").hover(function(){
    $(this).addClass("hover");
  }, function(){
    $(this).removeClass("hover");
  });


  // arrow 

  $("#work .prev").click(function(){
    var $l_child = $("#work ul li").last();
    $("#work ul").stop().animate({"margin-left":"-100%"}, 1000, function(){
        $("#work ul").prepend($l_child).css("margin-left", "-200%");
        counting();
    });
    return false;
});

  $("#work .next").click(function(){
    var $f_child = $("#work ul li").first();
    $("#work ul").stop().animate({"margin-left":"-300%"}, 1000, function(){
        $("#work ul").append($f_child).css("margin-left", "-200%");
        counting();
    });
    return false;
});








  
});

