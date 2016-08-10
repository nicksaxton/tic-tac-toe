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

    var reset = function() {
        spot1.removeClass("o");
        spot1.removeClass("x");
        spot2.removeClass("o");
        spot2.removeClass("x");
        spot3.removeClass("o");
        spot3.removeClass("x");
        spot4.removeClass("o");
        spot4.removeClass("x");
        spot5.removeClass("o");
        spot5.removeClass("x");
        spot6.removeClass("o");
        spot6.removeClass("x");
        spot7.removeClass("o");
        spot7.removeClass("x");
        spot8.removeClass("o");
        spot8.removeClass("x");
        spot9.removeClass("o");
        spot9.removeClass("x");
        spot1.html("+");
        spot2.html("+");
        spot3.html("+");
        spot4.html("+");
        spot5.html("+");
        spot6.html("+");
        spot7.html("+");
        spot8.html("+");
        spot9.html("+");
        turns = 0;
    }

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

            setTimeout(function() {
                /* Check for win or draw */
            if((spot1.hasClass("x") && spot2.hasClass("x") && spot3.hasClass("x")) ||
               (spot1.hasClass("x") && spot4.hasClass("x") && spot7.hasClass("x")) ||
               (spot1.hasClass("x") && spot5.hasClass("x") && spot9.hasClass("x")) ||
               (spot2.hasClass("x") && spot5.hasClass("x") && spot8.hasClass("x")) ||
               (spot3.hasClass("x") && spot5.hasClass("x") && spot7.hasClass("x")) ||
               (spot3.hasClass("x") && spot6.hasClass("x") && spot7.hasClass("x")) ||
               (spot4.hasClass("x") && spot5.hasClass("x") && spot6.hasCLass("x")) ||
               (spot7.hasClass("x") && spot8.hasClass("x") && spot9.hasClass("x")))
            {
                alert("X wins!");
                reset();
            }
            else if((spot1.hasClass("o") && spot2.hasClass("o") && spot3.hasClass("o")) ||
                    (spot1.hasClass("o") && spot4.hasClass("o") && spot7.hasClass("o")) ||
                    (spot1.hasClass("o") && spot5.hasClass("o") && spot9.hasClass("o")) ||
                    (spot2.hasClass("o") && spot5.hasClass("o") && spot8.hasClass("o")) ||
                    (spot3.hasClass("o") && spot5.hasClass("o") && spot7.hasClass("o")) ||
                    (spot3.hasClass("o") && spot6.hasClass("o") && spot7.hasClass("o")) ||
                    (spot4.hasClass("o") && spot5.hasClass("o") && spot6.hasClass("o")) ||
                    (spot7.hasClass("o") && spot8.hasClass("o") && spot9.hasClass("o")))
            {
                alert("O wins!");
                reset();
            }
            else
            {
                if(turns > 8)
                {
                    alert("Tie!");
                    reset();
                }
            }
            }, 100);

            
        }
    });

    $("#reset").on("click", reset);
});