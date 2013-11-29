window.onload = function () {
    var canvas = document.getElementById("monCanvas");

    if (!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }

    var context = canvas.getContext("2d");

    if (!context) {
        alert("Impossible de récupérer le contexte du canvas");
    }
};