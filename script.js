/*CHANGING BUTTONS*/
var prev = localStorage.setItem('prevMove', 'X');
$(".parts").one('click', function () {
    var prev = localStorage.getItem('prevMove');
    if (prev == 'X') {
        $(this).text('O');
        localStorage.setItem("prevMove", 'O');
    } else if (prev == 'O') {
        $(this).text('X');
        localStorage.setItem("prevMove", 'X');
    }
    check();
})



/*  COMPARING VALUES    */
function check() {
    var one = $('#1').text();
    var two = $('#2').text();
    var three = $('#3').text();
    var four = $('#4').text();
    var five = $('#5').text();
    var six = $('#6').text();
    var seven = $('#7').text();
    var eight = $('#8').text();
    var nine = $('#9').text();


    /*  HORIZONTAL  */
    if (one === two && two === three && three != "" && two != "" && one != "") {
        $("#1, #2, #3").css('background', '#68e56c');
        wins(two);

    } else if (four === five && five === six && four != "" && five != "" && six != "") {
        $("#4, #5, #6").css('background', '#68e56c');
        wins(five);
    } else if (seven === eight && eight === nine && seven != "" && eight != "" && nine != "") {
        $("#7, #8, #9").css('background', '#68e56c');
        wins(eight);
    }

    /*  VERTICAL  */
    else if (one === four && four === seven && one != "" && four != "" && seven != "") {
        $("#1, #4, #7").css('background', '#68e56c');
        wins(four);
    } else if (two === five && five === eight && two != "" && five != "" && eight != "") {
        $("#2, #5, #8").css('background', '#68e56c');
        wins(five);
    } else if (three === six && six === nine && three != "" && six != "" && nine != "") {
        $("#3, #6, #9").css('background', '#68e56c');
        wins(six);
    }

    /*  DIAGONAL  */
    else if (one === five && five === nine && one != "" && five != "" && nine != "") {
        $("#1, #5, #9").css('background', '#68e56c');
        wins(one);
    } else if (three === five && five === seven && three != "" && five != "" && seven != "") {
        $("#3, #5, #7").css('background', '#68e56c');
        wins(three);
    } else {

        var isValid = true;
        var count = 0;
        $(".parts").each(function () {
            var element = $(this);
            if (element.text() == "") {
                isValid = false;
            }
            count++;
        });
        if (isValid && count == 9) {
            $("#result").text('Draw!!!');
        }
    }

    /*  WIN CONDITION   */
    function wins(a) {
        $("#result").text(a + ' Momo Wins ');
        $('.parts').prop("disabled", true);
    }
}

$("#reset").click(function () {
    location.reload();
})
