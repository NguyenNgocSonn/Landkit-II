$(document).ready(function() {
    var stt = 0;
    var endImg = $("img.slide-img:last").attr("idx");


    $("#next").click(function () {
        if (++stt > endImg) {
            stt = 0;
        }

        changeImg(stt);
    });

    $("#prev").click(function () {
        if (--stt < 0) {
            stt = endImg;
        }

        changeImg(stt);
    });

    var interval;
    var timer = function () {
        interval = setInterval(function () {
            $("#next").click();
        }, 5000);
    };
    timer();
    function changeImg(stt) {
        $("img.slide-img").hide();
        $("img.slide-img").eq(stt).fadeIn(500);
        clearInterval(interval);
        timer();
    };


    var tt = 0;
    var endimg = $("img.slide-img-mobile:last").attr("idx");

    $("#next-mobile").click(function () {
        if (++tt > endimg) {
            tt = 0;
        }

        changeImgMobile(tt);
    });

    $("#prev-mobile").click(function () {
        if (--tt < 0) {
            tt = endimg;
        }

        changeImgMobile(tt);
    });

    var intervalMobile;
    var timerMobile = function () {
        intervalMobile = setInterval(function () {
            $("#next-mobile").click();
        }, 5000);
    };
    timerMobile();

    function changeImgMobile(tt) {
        $("img.slide-img-mobile").hide();
        $("img.slide-img-mobile").eq(tt).fadeIn(500);

        clearInterval(intervalMobile);
        timerMobile();
    };
});
