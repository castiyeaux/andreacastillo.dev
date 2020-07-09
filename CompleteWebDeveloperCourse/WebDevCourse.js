/*
function init() {
    document.getElementById("panel").innerHTML = "Hello There";
    window.alert("doc loaded");
}
window.onload = init;
*/

/*
document.getElementById("ch1").onclick = function() {

} // end ch1.onclick function
*/

/* Failed(?) jQuery
$("#ch1").click(function() {

    $('#ch1-pages').html('<p><a href="Chapter1-HTML/8-helloworld.html">8-helloworld</a></p>');

}); // end #ch1.click function
*/

/* NO
var chapterSectionsShowing = false;
$(".chapter").click(function() {

    // $(".chapter-sections").css("display", "block");
    // $(this.ul).fadeIn();

    if(chapterSectionsShowing == false) {
        $(".chapter-sections").fadeIn(function() {
            chapterSectionsShowing = true;
        });
    }
    else {
        $(".chapter-sections").fadeOut(function() {
            chapterSectionsShowing = false;
        });
    }

}); // end .chapter.click function
*/


/*
$(document).ready(function() {

    $(".chapter").click(function() {

        alert("hello there");

    }); // end .chapter.click function

});
*/

/*
$(".chapter").click(function() {

    alert("height: " + $(this).css("height"));

}); // end .chapter.click function
*/

var showing = false;
$(".chapter").hover(function() {

    if(showing == false) {

        $(this.ul).animate({height: "150px"}, "slow");
        $(this).find(".chapter-name").css({
            "font-size": "150%",
            "text-decoration": "underline"
        });
        $(this).find(".chapter-sections").fadeIn();

        showing = true;

    } // end if
    else {

        $(this).find(".chapter-name").css({
            "font-size": "100%",
            "text-decoration": "none"
        });
        $(this).find(".chapter-sections").fadeOut();
        $(this.ul).animate({height: "19px"}, "slow");
        
        showing = false;

    } // end else

}); // end .chapter.click function


/*
$(".chapter").hover(function() {

    $(this).animate({height: "200px"}, 1000);
    $(this).css("font-size", "150%");
    $(this).css("text-decoration", "underline");
    $(".chapter-sections").css("display", "block");

}, function() {

    $(this).animate({height: "19px"}, 1000);
    $(this).css("font-size", "100%");
    $(this).css("text-decoration", "none");
    $(".chapter-sections").css("display", "none");

}); // end .chapter.hover function
*/