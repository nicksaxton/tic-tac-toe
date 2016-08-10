$(document).ready(function() {
    var x = "x";
    var o = "o";
    var turns = 0;

    var spot1 = $("#spot1");
    var spot2 = $("#spot2");
    var spot3 = $("#spot3");
    var spot4 = $("#spot4");
    var spot5 = $("#spot5");
    var spot6 = $("#spot6");
    var spot7 = $("#spot7");
    var spot8 = $("#spot8");
    var spot9 = $("#spot9");

    $("#board li").on("click", function() {
        if(($(this).hasClass("o")) || ($(this).hasClass("x")))
        {
            alert("Spot already taken. Please choose another");
        }
        else
        {
            if((turns % 2) === 0)
            {
                /* X turn */
                $(this).addClass("x");
                $(this).html("x");
            }
            else
            {
                /* O turn */
                $(this).addClass("o");
                $(this).html("o");
            }

            turns++;
        }
    });
});