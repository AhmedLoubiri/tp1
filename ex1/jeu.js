function jeu(){
    alert("Bienvenue dans le jeu du chiffre caché !");
    let difficulte = prompt("Choisissez la difficulté : facile, moyen ou difficile");
    let s = ParametreJeu(difficulte);
    let number = Math.floor(Math.random() * s.range) + 1;
    let attempts = 0;
    while(attempts < s.MaxAttempts){
        let guess = prompt(`Devinez le chiffre caché entre 1 et ${s.range}, (attempt: ${attempts + 1}/${s.MaxAttempts})`);
        if(isNaN(guess) || guess === null || guess < 1 || guess > s.range){
            alert("Veuillez entrer un nombre valide");
            continue;
        }
        attempts++;
        guess = parseInt(guess);
        if(guess === number){
            alert(`Bravo ! Vous avez trouvé le chiffre caché en ${attempts} tentatives`);
            break;
        } 
        else if(guess < number){
            alert("Le chiffre caché est plus grand");
        } 
        else {
            alert("Le chiffre caché est plus petit");
        }
    }
    if(attempts === s.MaxAttempts){
        alert(`Désolé, vous avez épuisé toutes vos tentatives. Le chiffre caché était ${number}`);
    }
    if(confirm("Voulez-vous rejouer ?")){
        jeu();
    }
    else{
        alert("Merci d'avoir joué !");
    }
}

function ParametreJeu(difficulte){
    let niveaux = {
        "facile" : {MaxAttempts: 10, range: 50},
        "intermédiaire" : {MaxAttempts: 7, range: 70},
        "difficile" : {MaxAttempts: 5, range: 100}
    }
    return niveaux[difficulte] || niveaux["intermédiaire"];
}

jeu();