
function calculeazaAria() {
    var radius = document.form1.txtRadius.value;
    document.write("<P>Aria cercului este " + (radius * radius * Math.PI) + "</p>");

}
function titluriDeFilm() {


    var cars = ["Baieti rai 3", "Frozen", "King Arthur", "Ford", "Miami Bici", "Avatar2"];
    var text = "";
    var i;
    for (i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }
    document.getElementById("filme").innerHTML = text;
}

    var p = [5, 3, "1", 7, "9", 30, "45", 7];

    Array.prototype.max = function () {
        return Math.max.apply(null, this);
    };

    Array.prototype.min = function () {
        return Math.min.apply(null, this);
    };


    alert("Valoare maxima: " + p.max() + "\nValoare minima: " + p.min());
