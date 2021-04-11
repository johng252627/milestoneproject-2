$("#tile1").click(function () {
    (this).removeClass("hidden").addClass("pink");
})

$("#tile2").click(function () {
    (this).removeClass("hidden").addClass("pink");
})

$("#tile3").click(function () {
    (this).removeClass("hidden").addClass("green");
})

$("#tile4").click(function () {
    (this).removeClass("hidden").addClass("green");
})

$("#tile5").click(function () {
    (this).removeClass("hidden").addClass("blue");
})

$("#tile6").click(function () {
    (this).removeClass("hidden").addClass("blue");
})

$("#tile7").click(function () {
    (this).removeClass("hidden").addClass("red");
})

$("#tile8").click(function () {
    (this).removeClass("hidden").addClass("red");
})

$("#tile9").click(function () {
    (this).removeClass("hidden").addClass("purple");
})

$("#tile10").click(function () {
    (this).removeClass("hidden").addClass("purple");
})

$("#tile11").click(function () {
    (this).removeClass("hidden").addClass("orange");
})

$("#tile12").click(function () {
    (this).removeClass("hidden").addClass("orange");
})

//From https://jsfiddle.net/C6LPY/2/

$(function () {
    var game = $("#gameboard");
    var tiles = game.children();
    while (divs.length) {
        game.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});