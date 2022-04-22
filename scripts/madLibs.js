function confirmMadLibs() {
  //Definition de variables qui ont comme valeur les entree
  var vetement = document.getElementById("txtVetement").value;
  var nourriture = document.getElementById("txtNourriture").value;
  var action = document.getElementById("txtAction").value;
  var ami = document.getElementById("txtAmi").value;
  var nourriPluri = document.getElementById("txtNourriPluri").value;
  var adjectif = document.getElementById("txtAdjectif").value;
  var action2 = document.getElementById("txtAction2").value;
  var adverbe = document.getElementById("txtAdverbe").value;
  var nourriMascu = document.getElementById("txtNourriMascu").value;
  var nom = document.getElementById("txtNom").value;
  var adjectif2 = document.getElementById("txtAdjectif2").value;
  
  //Definition variable affichage
  var affiche = document.getElementById("divAffiche");

  //Construire le message à afficher
  var message = "<br><br>J’adore l’été ! Chaque jour, quand je suis en vacances, je me réveille, je mets mes " + vetement + " , je me rend à la cuisine et je mange " + nourriture + " pour déjeuner.  Ensuite, mon activité préféré est de " + action + " avec mon ami " + ami + ". À 14h, je dîne. Je mange des " + nourriPluri + " " + adjectif + ". Durant l’après-midi, j’aime me rendre au parc et de " + action2 + " " + adverbe + ". En soirée, je mange toujours un " + nourriMascu + " pour le souper. Finalement, je me couche et je rêve de " + nom + ".  Quel été " + adjectif2 + "!"

  //Afficher le message sur la page web
    affiche.innerHTML = message;
}