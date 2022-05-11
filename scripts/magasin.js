/*Declaration d'une variable total (utilisable dans plusiseurs fonctions)*/
var total = 0;

/*Fonction qui calcul le cout total incluant le cout de livraison et les taxes, et qui affiche le reçu par la suite. */

function calculCoutTotal() {
  
  //Definition de variable pour afficher le reçu
  var afficheRecu = document.getElementById("divAfficheRecu");
  
  //Definition de variable pour creer le recu
  var recu = "REÇU - BIJOUX CHAMBERLAIN<br>*****************************************************<br>";

  /*Definition d'une variable qui est un tableau qui contient le nom des items, la quantite acheter, et le cout*/
  var tblCalculCout = [
    ["Colier en Argent", parseInt(document.getElementById("txtqteI1").value), 25],
    ["Colier en Or", parseInt(document.getElementById("txtqteI2").value), 29],
    ["Bague", parseInt(document.getElementById("txtqteI3").value), 18],
    ["Bracelet", parseInt(document.getElementById("txtqteI4").value), 20],
    ["Boucles d'oreille", parseInt(document.getElementById("txtqteI5").value), 22],
  ];

  /*Verification si entree de quantite n'est pas un nombre et que si l'entree n'est pas un nombre, change la quantite a 0*/
  for (var i = 0; i < tblCalculCout.length; i++) {
  if (isNaN(tblCalculCout[i][1])) {
    tblCalculCout[i].splice(1, 1, 0);
    }
  }
 
  /*Definiton variable pour la province de residence qui determine les taxes*/
  var province = document.getElementById("selRegion").value;
  
  /*Definition variables pour le taux de taxes et pour le text ecrit sur le recu. Change les valeurs si la province est quebec*/
  var tauxTaxe = 0.13;
  if (province == "quebec") {
    var tauxTaxe = 0.15;
  } 

  var txtTaxe = "ON 13%";
  if (province == "quebec") {
    var txtTaxe = "QC 15%";
  } 
  
 /*Definition variable du cout des livraisions. Cout de livraison 15$ par contre si livraison rapide a ete choisit change cout a 40$*/
  var radioLivraison = document.getElementsByName("typeLivraison");
  var coutLivraison = 15;
  
  for (var i = 0; i < radioLivraison.length; i++) {
           if (radioLivraison[1].checked) {
             coutLivraison = 40;
           }
       }

  /*Calcul de chaque item en multipliant le cout par la quantite entree et en l'ajoutant a la fin du tableau*/
  var coutItem = 0;
  
  for (var i = 0; i < tblCalculCout.length; i++) {
    coutItem = ((tblCalculCout[i][1])*(tblCalculCout[i][2]));
    tblCalculCout[i].push(coutItem);
    coutItem = 0;
  }

  //Ajout les items au recu si la quantite n'est pas 0
  
  for (var i = 0; i < tblCalculCout.length; i++) {
    if (tblCalculCout[i][1] != 0) {
      recu += tblCalculCout[i][0] + "    x" + tblCalculCout[i][1] + "    -" + tblCalculCout[i][3].toFixed(2) + "$<br>";
    }
  }
  recu += "*****************************************************<br>";
  
  /*Calcul des items ensemble*/
  var totalItem = 0;
  
  for (var i = 0; i < tblCalculCout.length; i++) {
    totalItem += tblCalculCout[i][3];
  }
  
  //Ajoute total des items au recu
  recu += "Sous-total des items    -" + totalItem.toFixed(2) + "$<br>";
  
  //Calcul sous-total avec livraison
  var sousTotal = totalItem + coutLivraison;

  //Ajoute livraison et sous total au recu
  recu += "Livraison    -" + coutLivraison.toFixed(2) + "$<br>Sous-total    -" + sousTotal.toFixed(2) + "$<br>";
  
  //Calcul taxe
  var taxe = (sousTotal*tauxTaxe).toFixed(2);

  //Ajoute taxe au recu
  recu += "Taxe (" + txtTaxe + ")    -" + taxe + "$<br>";
  
  //Calcul total (sous-total + taxe)
  total = (sousTotal + parseFloat(taxe)).toFixed(2);

  //Ajoute total au recu
  recu += "TOTAL    -" + total + "$<br>*****************************************************<br>Merci pour votre commande\n";
  
  /*Affiche une erreur si le total des items est de 0 sinon afficher le recu sur la page web*/
  if (totalItem == 0) {
    afficheRecu.innerHTML = "Vous n'avez pas selectionner d'item.<br> Afin d'acheter un item s'il vous plait entrer la quantite voulus.";
  } else {
    afficheRecu.innerHTML = recu;
  }
  
} //Fin fonction calculCoutTotal()



/*Deuxieme fonction qui prend le montant payer par le client et lui retourne le montant en surplus*/

function payer() {
  
  //Definition de variable pour afficher le reçu
  var afficheRetour = document.getElementById("divAfficheRetour");

  //Definition de variable pour message merci pour la commande
  var afficheMerci = document.getElementById("divMessageMerci");
  
  //Definition de variable pour creer le recu
  var retour = "Votre achat a reussi. Voici votre montant rendus:<br>";

  /*Definition d'une variable qui est un tableau qui contient la valeur de chaque billet et piece et la quantite utiliser pour payer*/
  var tblCaisse = [
    [100, parseInt(document.getElementById("txtqteBillet100").value)],
    [50, parseInt(document.getElementById("txtqteBillet50").value)],
    [20, parseInt(document.getElementById("txtqteBillet20").value)],
    [10, parseInt(document.getElementById("txtqteBillet10").value)],
    [5, parseInt(document.getElementById("txtqteBillet5").value)],
    [2, parseInt(document.getElementById("txtqteBillet2").value)],
    [1, parseInt(document.getElementById("txtqteBillet1").value)],
    [0.25, parseInt(document.getElementById("txtqteBillet025").value)],
    [0.10, parseInt(document.getElementById("txtqteBillet010").value)],
    [0.05, parseInt(document.getElementById("txtqteBillet005").value)],
  ];

  /*Verification si un entree de quantite n'est pas un nombre. Si ce n'est pas un nombre change la quantite a 0.*/
  
  for (var i = 0; i < tblCaisse.length; i++) {
  if (isNaN(tblCaisse[i][1])) {
    tblCaisse[i].splice(1, 1, 0);
    }
  }
  
  /*Calcul total remis pas le client en multipliant la valeur des billets par la quantite entree.*/
  var totalPayer = 0;
  
  for (var i = 0; i < tblCaisse.length; i++) {
    totalPayer += ((tblCaisse[i][0])*(tblCaisse[i][1]));
  }

  /*Calcul total a remettre au client qui est la difference entre le montant payer par le client et le total de l'achat*/
  var totalRemettre = (totalPayer - total).toFixed(2);

  /*Tableau qui stoke la quantite a remettre au client de chaque billet*/
  var tblRemettre = [
    [100, 0],
    [50, 0],
    [20, 0],
    [10, 0],
    [5, 0],
    [2, 0],
    [1, 0],
    [0.25, 0],
    [0.10, 0],
    [0.05, 0],
  ];

  //Definition variable qui garde quantite a remmettre
  var qteRemettre = totalRemettre;

  /*Determination de la quantite de chaque billet/piece a remettre au client, en prenant l'entier du quotient de qteRemettre et chaque billet/piece. Change la valeur de qteRemettre a l'aide du reste de la meme division. Repeter les etapes lorsque le quotient de la division est plus grand que 0 et lorsque qteRemmettre est plus grand que 0.*/
  
  for (var i = 0; i < tblRemettre.length; i++) {
    if (qteRemettre/tblRemettre[i][0] > 0 && qteRemettre > 0) { 
      tblRemettre[i][1] = parseInt(qteRemettre/tblRemettre[i][0]);
      qteRemettre = (qteRemettre%tblRemettre[i][0]).toFixed(2);
    }
  }

  //Ajoute une piece de 5 sous si la qteRemettre n'est pas 0
  
  if (qteRemettre != 0) {
    tblRemettre[9][1]++;
  }

  //Change valeur de 0,25$ , 0,10$ , 0,05$ a des sous
  tblRemettre[7][0] = 25;
  tblRemettre[8][0] = 10;
  tblRemettre[9][0] = 5;

  /*Creation message pour argent a retourne, qui ajoute la quantite des billets/pieces lorsque la quantite n'est pas 0.*/
  
  for (var i = 0; i < tblRemettre.length; i++) {
    
    if (tblRemettre[i][1] != 0) {
      
      if (i < 5) { 
        /*Message pour billet 100, 50, 20, 10 et 5$*/
        retour += (tblRemettre[i][1] + " billet de " + tblRemettre[i][0] + "$<br>");
      } else if (i > 6) {
        /*Message pour piece 25, 10 et 5 sous*/
        retour += (tblRemettre[i][1] + " piece de " + tblRemettre[i][0] + " sous<br>");
      } else {
        /*Message pour piece 1 et 2$*/
        retour += (tblRemettre[i][1] + " piece de " + tblRemettre[i][0] + "$<br>");
      } 
    } 
  }

   /*Affiche erreur si le total payer est plus petit que le total d'achat, donc si le total a remettre est un nombre plus petit que 0. Ou affiche qu'il n'y aucun argent a rendre si totalRemettre est egale a 0. Ou affiche l'argent a remmettre si total Remettre plus grand que 0. */
  
  if (totalRemettre < 0) {
    afficheRetour.innerHTML = "Vous n'avez pas payer le bon montant s'il vous plait entree la bonne quantite de chaque billet";
  } else if (totalRemettre == 0) {
     afficheRetour.innerHTML = "Vous avez payer le montant exacte, il y a aucun argent a rendre.";
  } else {
    afficheRetour.innerHTML = retour;
    //Affiche message merci
    afficheMerci.innerHTML = "<br><h2>Merci pour votre commande!</h2><br>"
  }

  //Affiche message merci
  afficheMerci.innerHTML = "<br><h2>Merci pour votre commande!</h2><br>";
} //Fin fonction payer()

