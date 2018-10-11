var graph = new Array(9);

$(function () {
    for (var i = 0; i < 9; i++) {
        graph[i] = new Array(9);
        for (var j = 0; j < 9; j++) {
            graph[i][j] = 0;
        }
    }
    graph[0][1] = 1;
    graph[0][3] = 1;
    graph[1][0] = 1;
    graph[1][2] = 1;
    graph[1][4] = 1;
    graph[2][1] = 1;
    graph[2][5] = 1;
    graph[3][0] = 1;
    graph[3][4] = 1;
    graph[3][6] = 1;
    graph[4][1] = 1;
    graph[4][3] = 1;
    graph[4][5] = 1;
    graph[4][7] = 1;
    graph[5][2] = 1;
    graph[5][4] = 1;
    graph[5][8] = 1;
    graph[6][3] = 1;
    graph[6][7] = 1;
    graph[7][4] = 1;
    graph[7][6] = 1;
    graph[7][8] = 1;
    graph[8][5] = 1;
    graph[8][7] = 1;
})

function Limpiar() {
    Limpiar1();
}

function Limpiar1() {
    setInterval(function () {
        switch ($("#asp").parent().parent().prop("id")) {
            case "00":
                $("#01 > .one").append($("#asp"));
                LimpiarArea($("#01 > .garbage"))
                break;
            case "01":
                $("#02 > .one").append($("#asp"));
                LimpiarArea($("#02 > .garbage"))
                break;
            case "02":
                $("#12 > .one").append($("#asp"));
                LimpiarArea($("#12 > .garbage"))
                break;
            case "12":
                $("#11 > .one").append($("#asp"));
                LimpiarArea($("#11 > .garbage"))
                break;
            case "11":
                $("#10 > .one").append($("#asp"));
                LimpiarArea($("#10 > .garbage"))
                break;
            case "10":
                $("#20 > .one").append($("#asp"));
                LimpiarArea($("#20 > .garbage"))
                break;
            case "20":
                $("#21 > .one").append($("#asp"));
                LimpiarArea($("#21 > .garbage"))
                break;
            case "21":
                $("#22 > .one").append($("#asp"));
                LimpiarArea($("#22 > .garbage"))
                break;
            case "22":
                clearInterval();
                Limpiar2();
                return;
        }
    }, 1000)
}

function Limpiar2() {
    setInterval(function () {
        switch ($("#asp").parent().parent().prop("id")) {
            case "22":
                $("#21 > .one").append($("#asp"));
                break;
            case "21":
                $("#20 > .one").append($("#asp"));
                break;
            case "20":
                $("#10 > .one").append($("#asp"));
                break;
            case "10":
                $("#00 > .one").append($("#asp"));
                break;
            default:
            clearInterval();
            return;
        }
    }, 1000)
}

function LimpiarArea(temp) {
    if ($(temp).hasClass("dirt")) {
        $(temp).removeClass("dirt");
        $(temp).addClass("clean");
    }
}

function Estado(temp) {
    if ($(temp).hasClass("dirt")) {
        $(temp).removeClass("dirt");
        $(temp).addClass("clean");
    } else {
        $(temp).removeClass("clean");
        $(temp).addClass("dirt");
    }
}
