/*

// JEU DU SHIFUMI

alert("Bienvenue! Nous allons jouer à pierre, feuille, ciseaux!");

var pierre, feuille, ciseaux, resultatJoueur, resultatIA, scoreJoueur, scoreIA, affichageScore;
pierre = "pierre";
feuille = "feuille";
ciseaux = "ciseaux";
scoreJoueur = 0;
scoreIA = 0;

var nombreAleatoire = Math.random();

function playJoueur() {
    resultatJoueur = (prompt("pierre, feuille ou ciseaux?")).toLowerCase();
    if (resultatJoueur == pierre) {
        alert("Vous avez choisi pierre!");
    }
    else if (resultatJoueur == feuille) {
        alert("Vous avez choisi feuille!");
    }
    else if (resultatJoueur == ciseaux) {
        alert("Vous avez choisi ciseaux!");
    }
    return resultatJoueur;
}

function playIA() {
    resultatIA = nombreAleatoire;

    if (resultatIA <= 0.33) {
        resultatIA = pierre;
    }

    else if ((resultatIA >= 0.34) && (resultatIA <= 0.66)) {
        resultatIA = feuille;
    }

    else if (resultatIA >= 0.67) {
        resultatIA = ciseaux;
    }
    return resultatIA;
}

function comparerScores() {
    if ((resultatJoueur == pierre) && (resultatIA == ciseaux) || (resultatJoueur == feuille) && (resultatIA == pierre) || (resultatJoueur == ciseaux) && (resultatIA == feuille)) {
        scoreJoueur = scoreJoueur + 1;
        alert("Le joueur marque 1 point!");
    }
    else if ((resultatJoueur == ciseaux) && (resultatIA == pierre) || (resultatJoueur == feuille) && (resultatIA == ciseaux) || (resultatJoueur == pierre) && (resultatIA == feuille)) {
        scoreIA = scoreIA + 1;
        alert("L'ordinateur marque 1 point!");
    }
    else if (resultatJoueur === resultatIA) {
        alert("Egalité!");
    }
    return scoreIA, scoreJoueur;
}

do {
    comparerScores();
    if (scoreJoueur === 2) {
        var victoire = ("Le joueur remporte la partie!");
        alert(victoire);
        break;
    }
    else if (scoreIA === 2) {
        var victoire = ("L'ordinateur remporte la partie!");
        alert(victoire);
        break;
    }
    else {
        playJoueur();
        playIA();
    }
    affichageScore = ("Le joueur a: ") + scoreJoueur + (" points") + "\n"
        + ("L'ordinateur a: ") + scoreIA + (" points.");
    alert(affichageScore);
}
while ((scoreJoueur < 3) && (scoreIA < 3));



# Consigne

Voici un exercice pour vous entraîner à manipuler le DOM en JavaScript. La structure HTML du document vous est donnée, vous n'êtes pas autorisé à la modifier en aucune manière. Par exemple, vous ne pouvez pas rajouter de classe ou d'ID s'il n'y en a pas.

- Récupérez l'élément d'id mainTitle et ajouter du texte dedans
- Récupérez l'élément d'id subTitle et ajouter du texte dedans
- récupérez les éléments de classe content et mettez leur tous un fond bleu
- Faites en sorte que lorsque l'utilisateur clique sur le button l'article avec tout son contenu disparaît


var titre = document.getElementById('mainTitle').innerHTML = 'H1 modifié grace à inner.HTML';
console.log(titre);

var sousTitre = document.getElementById('subTitle').innerHTML = 'H2 modifié grace à inner.HTML';
console.log(sousTitre);

var bgBleu = document.getElementsByClassName('content');
for (i = 0; i < 3; i++){
  bgBleu[i].style.backgroundColor = "blue";
};

function deleteContent() {
  var contenu = document.getElementsByTagName("article");
  contenu[0].style.display = "none";
  };
  
 */ 
