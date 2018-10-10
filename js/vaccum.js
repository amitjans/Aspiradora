var p = 0;
var aux = 2;

function Basura(){
    $(".vacuum").empty();
    $(".area").empty();
    p = 0;
    aux = Math.floor(Math.random() * 10);
    while (aux == 0) {
        aux = Math.floor(Math.random() * 10);
    }
    for (let i = 0; i <= aux; i++) {
        $(".vacuum").append('<td id="1' + i + '"></td>');
    }
    for (let i = 0; i <= aux; i++) {
        var temp = Math.floor(Math.random() * 10);
        if(temp % 2 == 0){
            $(".area").append('<td id="0' + i + '"><div class="space clean" onclick="CambioEstado(\'0' + i + '\')"></div></td>');
        } else {
            $(".area").append('<td id="0' + i + '"><div class="space dirt" onclick="CambioEstado(\'0' + i + '\')"></div></td>');
        }   
    }
    $("#10").append('<img id="asp" src="img/aspiradora.png" alt="">');
}

function CambioEstado(id) {
    if($("#" + id).children().hasClass("dirt")){
        $("#" + id).children().removeClass("dirt");
        $("#" + id).children().addClass("clean");
    } else {
        $("#" + id).children().removeClass("clean");
        $("#" + id).children().addClass("dirt");
    }
}

function Limpiar(id) {
    if($("#" + id).children().hasClass("dirt")){
        $("#" + id).children().removeClass("dirt");
        $("#" + id).children().addClass("clean");
    }
}

function LimpiarManual() {
    var id = $("#asp").parent().prop("id");
    if($("#0" + id[1]).children().hasClass("dirt")){
        $("#0" + id[1]).children().removeClass("dirt");
        $("#0" + id[1]).children().addClass("clean");
    }
}

function Derecha() {
    if (p + 1 <= aux) {
        $("#1" + p).empty();
        p++;
        $("#1" + p).append('<img id="asp" src="img/aspiradora.png" alt="">');
        setTimeout(Limpiar('0' + p), 10000);
    }  
}

function Izquierda() {
    if (p - 1 >= 0) {
        $("#1" + p).empty();
        p--;
        $("#1" + p).append('<img id="asp" src="img/aspiradora.png" alt="">');
        setTimeout(Limpiar('0' + p), 10000);
    }
}