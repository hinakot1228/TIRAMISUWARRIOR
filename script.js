/*===============================
    タイトル　YES
================================*/
let title_mouseover = document.querySelector("#title_mouseover");
title_mouseover.addEventListener("mouseover", function () {
  this.style.color = "rgb(36,6,202)";
  this.style.backgroundColor = "#fff";
});

title_mouseover.addEventListener("mouseleave", function () {
  this.style.color = "#fff";
  this.style.backgroundColor = "";
});

/*===============================
    メッセージ　送信
================================*/
$('#message_input_button').on('click', function () {
    $("#message_text_input").text($('#message_input_text').val());
    $("#message_input_text").text($('#message_input_text').val(""));
    $("#message_input_text").attr('placeholder', '( Successfully sent! )');
    $(".message_input_text_appear").css("visibility","visible");
    $("#message_input_button").attr('disabled', true);
    // redを変更する
    $("#message_input_button_disabled").css("background-color","#777");

    setTimeout(function(){
        $(".message_text_appear").css("visibility","visible");
      }, 1000);
});

/*===============================
    メッセージ　星
================================*/
let star = "★彡"
$('#message_star_button').on('click', function () {
    let message_input_text = $('#message_input_text').val()
    $('#message_input_text').val(message_input_text+star);
});

/*===============================
    タロットカード
================================*/
$(document).ready(function(){
    var margin = $("#image1").width()/2;
    var width = 100;
    var height = 150;


    //初期（裏面に隠す）
    $("#image2").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});

    $("#image1").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image2").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('　언니는 봄날의 햇살처럼 따뜻하고 다정한 사람입니다.');
    });

    $("#image2").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image1").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('');
    });
});

$(document).ready(function(){
    var margin = $("#image3").width()/2;
    var width = 100;
    var height = 150;


    //初期（裏面に隠す）
    $("#image4").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});

    $("#image3").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image4").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('　언니는 공주처럼 예쁜 사람입니다.');
   });

    $("#image4").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image3").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('');
    });
});

$(document).ready(function(){
    var margin = $("#image5").width()/2;
    var width = 100;
    var height = 150;


    //初期（裏面に隠す）
    $("#image6").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});

    $("#image5").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image6").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('　언니는 강하고 든든한 사람입니다.');
    });

    $("#image6").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image5").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('');
    });
});

$(document).ready(function(){
    var margin = $("#image7").width()/2;
    var width = 100;
    var height = 150;


    //初期（裏面に隠す）
    $("#image8").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});

    $("#image7").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image8").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('　언니는 TOP이 될 수 있는 사람입니다.');
    });

    $("#image8").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image7").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('');
    });
});

$(document).ready(function(){
    var margin = $("#image9").width()/2;
    var width = 100;
    var height = 150;


    //初期（裏面に隠す）
    $("#image10").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});

    $("#image9").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image10").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('　별똥별이 언니의 소원을 이루어 줄 겁니다.');
    });

    $("#image10").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image9").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('');
    });
});

$(document).ready(function(){
    var margin = $("#image11").width()/2;
    var width = 100;
    var height = 150;


    //初期（裏面に隠す）
    $("#image12").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});

    $("#image11").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image12").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('　언니가 본 타로의 "좋은" 결과는 진짜가 될 겁니다. ');
    });

    $("#image12").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image11").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('');
    });
});

$(document).ready(function(){
    var margin = $("#image13").width()/2;
    var width = 100;
    var height = 150;


    //初期（裏面に隠す）
    $("#image14").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});

    $("#image13").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image14").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('　좋은 사람들이 언니 주변에 있을 겁니다.');
    });

    $("#image14").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image13").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('');
    });
});

$(document).ready(function(){
    var margin = $("#image15").width()/2;
    var width = 100;
    var height = 150;


    //初期（裏面に隠す）
    $("#image16").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});

    $("#image15").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image16").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('　언니는 어디에서든 빛날 수 있는 사람입니다.');
    });

    $("#image16").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image15").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('');
    });
});

$(document).ready(function(){
    var margin = $("#image17").width()/2;
    var width = 100;
    var height = 150;


    //初期（裏面に隠す）
    $("#image18").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});

    $("#image17").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image18").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('　언니는 여왕처럼 많은 사랑을 받을 겁니다.');
    });

    $("#image18").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image17").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('');
    });
});

$(document).ready(function(){
    var margin = $("#image19").width()/2;
    var width = 100;
    var height = 150;


    //初期（裏面に隠す）
    $("#image20").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});

    $("#image19").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image20").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('　언니의 꿈이 반드시 이루어질 겁니다.');
    });

    $("#image20").click(function(){
        $(this).stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration:200});
        window.setTimeout(function() {
            $("#image19").stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration:200});
        },200);
        $('#tarot_message_text_add').text('');
    });
});

// /*===============================
//     ロマン
// ================================*/
// const dog1 = document.getElementById("dog1");


// SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
//   const recognition = new SpeechRecognition();

//   recognition.lang = 'ko-KR';
//   recognition.continuous = true;

//   recognition.onresult = (event) => {
//     // alert(event.results[0][0].transcript);
//     // console.log(event);
//     console.log(event.results[0][0].transcript)
//     // if () {
//         console.log(event.results[0][0].transcript)
//         dog1.muted = true;
//         dog1.play()
//     // } else {
//         // console.log("else")
//     // }
//   }

//   recognition.start(); 