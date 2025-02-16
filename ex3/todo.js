document.querySelector("#but1").addEventListener("click", function() {
    const n = document.querySelector("#name");
    const c = document.querySelector("#content");
    const nom = n.value;
    const contenu = c.value;

    if (nom === "" || contenu === "") {
        alert("Veuillez remplir les deux champs.");
        return;
    }

    const cont = document.querySelector("#todoList");
    const newDiv = document.createElement("div");
    newDiv.classList.add("added-item");
    const textNode = document.createElement("p");
    const icon = document.createElement("img");
    
    icon.src = "images/delete.jpg";
    icon.width = 25;
    icon.height = 15;
    icon.style.marginTop = "1px";
    icon.style.marginLeft = "10px";
    
    const closeButton = document.createElement("button");
    closeButton.classList.add("close");
    
    closeButton.appendChild(icon);
    closeButton.addEventListener("click", function() {
        const selectedItem = closeButton.parentNode;
        selectedItem.remove();
    });
    
    textNode.textContent = nom + " : " + contenu;
    newDiv.appendChild(textNode);
    newDiv.appendChild(closeButton);
    cont.appendChild(newDiv);

    n.value = "";
    c.value = "";
});