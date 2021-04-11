(function ($) {

    $(div).click(function () {
        var tileColor = ['pink', 'pink', 'green', 'green', 'blue', 'blue', 'red', 'red', 'purple', 'purple', 'orange', 'orange'];
        $('div').each(function (i) {
            $(this).removeClass(hidden).addClass(tileColor[Math.floor(Math.random() * tileColor.length)]);
        });
    });

});