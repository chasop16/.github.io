/*Programme qui demande le prenom, le nom de millieu et le nom de famille, et donne les initiales, le nom complet, et un nom d'utilisateur*/
function confirmeInscription() {
  //Definition variable affichage
  var affiche = document.getElementById("divAffiche");
  
  var prenom = document.getElementById("txtPrenom").value;
  var nomMillieu = document.getElementById("txtNomMillieu").value;
  var nomFamille = document.getElementById("txtNomFamille").value;

  
  var initiale = ((prenom.slice(0, 1)) + "." + (nomMillieu.slice(0, 1)) + "." + (nomFamille.slice(0,1)) + ".");

  var nomComplet = (prenom + " " + nomMillieu + " " + nomFamille);

  /*Le nom d'utilisateur est tout en lettres minuscules (initiale   du prénom, initiale du nom du milieu et nom de famille au complet)*/
  var utilisateur = ((prenom.slice(0, 1)) + (nomMillieu.slice(0, 1)) + nomFamille).toLowerCase();

   //Construire le message à afficher
  var message = "<br><br>Voici ton nom complet: " + nomComplet + " <br><br>Voici tes initiales: " + initiale + " <br></br>Voici un nom d'utilisateur: " + utilisateur ;

  //Afficher le message sur la page web
  affiche.innerHTML = message;
}