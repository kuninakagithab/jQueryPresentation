$(function () {

  $("#typ").t({            //()のなかにタイピング風にしたい要素を取ってくる
    speed: 10,             //テキストがタイプされるスピードを指定できます。数値が低いほど速くなります。
    speed_vary: true,      //値を「true」にすると、まるで人間が入力しているかのように、タイプされる文字ごとにスピードにばらつきが出ます
    delay: 1,              //タイプを開始する時間をずらすことができます。値はmsで指定します。
    mistype: 30,           //文字の打ち間違いのような演出ができます（英数字のみ）。ミスの発生する確率を値に設定します
    caret: true,           //値を「true」にすると、カーソルが非表示になります
    blink: true,           //値を「true」にすると、カーソルが点滅します。
    repeat: false,         //リピートの回数を数字で指定します。値に「true」を指定すると、無限にリピートします。
  });
  //時限装置
  $('.scrsty').delay(8000).queue(function (next) {
    $(this).remove();
    // next();
  });

  //クリックしても消える処理
  $('.scrsty').on("click", function () {
    $(this).remove();
    $(".none").removeClass("none");
    $(".mcontainer").addClass("none");
    $(".jisakukannsuu").addClass("none");
    $(".mcontainer").removeClass("none");
  });

  setTimeout(function () {
    $(".none").removeClass("none")
    $(".mcontainer").addClass("none");
    $(".jisakukannsuu").addClass("none");
    $(".mcontainer").removeClass("none");
  }, 7000);

  $("#kiso").on("click",function(){
    $(".mcontainer").addClass("none");
    $(".jisakukannsuu").addClass("none");
    $(".mcontainer").removeClass("none");
  });

  $("#jisaku").on("click",function(){
    $(".mcontainer").addClass("none");
    $(".jisakukannsuu").addClass("none");
    $(".jisakukannsuu").removeClass("none");
  });

  $("#kiso").removeClass("yy");
  $("#kiso").addClass("yy");

  $("#jisaku").on("click",function(){
    $("#kiso").removeClass("yy");
    $(this).addClass("yy");
  });

  $("#kiso").on("click",function(){
    $("#jisaku").removeClass("yy");
    $(this).addClass("yy");
  });




//モーダル
  $('.js-modal-open').on('click',function(){
    $("aside").addClass("none");
      $('.js-modal').fadeIn();
      return false;
  });
  $('.js-modal-close').on('click',function(){
    $("aside").removeClass("none").fadeIn(2000);
      $('.js-modal').fadeOut();
      return false;
  });

////////////////////////////////////////////
//スムーススクロール

  $("#cursor1").on("click", function () {
    let target1 = $("#target1").offset().top;
    console.log(target1);
    $("html,bpdy").animate({ scrollTop: target1 }, 500);
  });

  $("#cursor2").on("click", function () {
    let target2 = $("#target2").offset().top;
    $("html, body").animate({ scrollTop: target2 }, 500);
  });

  $("#cursor3").on("click", function () {
    let target3 = $("#target3").offset().top;
    $("html, body").animate({ scrollTop: target3 }, 500);
  });

  $("#cursor4").on("click", function () {
    let target4 = $("#target4").offset().top;
    $("html, body").animate({ scrollTop: target4 }, 500);
  });

  $("#cursor5").on("click", function () {
    let target5 = $("#target5").offset().top;
    $("html, body").animate({ scrollTop: target5 }, 500);
  });

  $("#cursor6").on("click", function () {
    let target6 = $("#target6").offset().top;
    $("html, body").animate({ scrollTop: target6 }, 500);
  });
});


