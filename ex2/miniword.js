const editor = document.querySelector("#editor");
const couleur = document.querySelector("#couleur");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");

function change() {
    editor.style.color = couleur.value;
    editor.style.fontSize = fontSize.value + "px";
    editor.style.fontFamily = fontFamily.value;
}

couleur.addEventListener("input", change);
fontSize.addEventListener("input", change);
fontFamily.addEventListener("change", change);