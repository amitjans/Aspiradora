var puntos = 0;
var sentidoh = 1;

function Generar() {
    var x = $("#x").val();
    var y = $("#y").val();
    $("table").empty();
    for (var i = y - 1; i >= 0; i--) {
        var temp = '<tr>';
        for (var j = 0; j < x; j++) {
            temp += '<td id="' + j + 'x' + i + '"><div class="space one"></div><div class="space garbage ' + (ParOImpar() ? "clean" : "dirt") + '" onclick="Estado(this)"></div></td>';
        }
        temp = temp + '</tr>';
        $("table").append(temp);
    }
    $("#0x0>.one").append('<img id="asp" src="img/aspiradora.png" alt=""></img>');
    $("#puntos").empty();
    puntos = 0;
    sentidoh = 1;
    ActualizarPuntos(0);
    $("#l").fadeIn(0);
}

function ParOImpar() {
    var temp = Math.floor(Math.random() * 10);
    return temp % 2 == 0;
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

function ActualizarPuntos(p) {
    $("#puntos").empty();
    $("#puntos").append(p);
}

function CambioEstado(id) {
    if ($("#" + id).children().hasClass("dirt")) {
        $("#" + id).children().removeClass("dirt");
        $("#" + id).children().addClass("clean");
    } else {
        $("#" + id).children().removeClass("clean");
        $("#" + id).children().addClass("dirt");
    }
}

function Limpiar() {
    $("#l").fadeOut(500);
    ActualizarPuntos(0);
    LimpiarEspacio($("#asp").parent().parent());
    var tiempo = setInterval(function () {
        var pos = $("#asp").parent().parent().prop("id").split('x');
        var tx = pos[0] * 1;
        console.log(tx);
        var ty = pos[1] * 1;
        console.log(ty);
        if(!!document.getElementById(tx + "x" + ty)){
            LimpiarEspacio($("#" + tx + "x"  + ty));
        }
        if(!!document.getElementById((tx + sentidoh) + "x" + ty)){
            $("#" + (tx + sentidoh) + "x" + ty + ">.one").append($("#asp"));
        } else if(!!document.getElementById(tx + "x" + (ty + 1))){
            $("#" + tx + "x" + (ty + 1) + ">.one").append($("#asp"));
            if(sentidoh == 1){
                sentidoh = -1;
            } else {
                sentidoh = 1;
            }
        } else {
            clearInterval(tiempo);
            Inicio();
        }
    }, 500)
}

function Inicio(){
    var pos = $("#asp").parent().parent().prop("id").split('x');
        var tx = pos[0] * 1;
        console.log(tx);
        var ty = pos[1] * 1;
        console.log(ty);
        var t = setInterval(function () {
            if(!!document.getElementById(tx + "x" + ty)){
                LimpiarEspacio($("#" + tx + "x"  + ty));
            }
            if(tx > 0){
                tx--;
                $("#" + tx + "x" + ty + ">.one").append($("#asp"));
            } else {
                ty--;
                $("#" + tx + "x" + ty + ">.one").append($("#asp"));
            }
            if(tx == 0 && ty == 0){
                clearInterval(t);
                $("#l").fadeIn(500);
            }
        }, 500)
}

function LimpiarEspacio(id) {
    if ($(id).children(".garbage").hasClass("dirt")) {
        $(id).children(".garbage").removeClass("dirt");
        $(id).children(".garbage").addClass("clean");
        puntos++;
        ActualizarPuntos(puntos);
    }
}