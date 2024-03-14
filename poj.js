let color_box = document.getElementById("color-box");

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Ajout d'un écouteur d'événements sur le bouton
let changeColorBtn  = document.getElementById("change-color-btn");
changeColorBtn.addEventListener('click', function () {
    // Changement de la couleur d'arrière-plan de la boîte de couleur
    color_box.style.backgroundColor = getRandomColor();
});

