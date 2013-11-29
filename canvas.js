window.onload = function () {
    var canvas = document.getElementById("monCanvas");

    if (!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }

    var contexte = canvas.getContext("2d");

    if (!contexte) {
        alert("Impossible de récupérer le contexte du canvas");
    }

    afficherPersonnage(contexte, 0, 0);
};

function afficherPersonnage(contexte, x, y) {
    var hauteur = 30;
    var largeur = 30;

    dessinerTriangle(contexte, x, y, hauteur, largeur);
}

function dessinerTriangle(contexte, x, y, hauteur, largeur) {
    contexte.beginPath();
    contexte.beginPath();
    contexte.moveTo(x, y + hauteur);
    contexte.lineTo(x + largeur/2, y);
    contexte.lineTo(x + largeur, y + hauteur);
    contexte.lineTo(x, y + hauteur);
    contexte.stroke();
    contexte.closePath();
}