function confirmeResultat() {
  //Definition variable pour afficher les resultats
  var affiche = document.getElementById("divAffiche");
  
  /*Definition d'une variable qui affiche le message des resultats du quiz.*/
  var message = "";
  
  //Correction question 1
  var radiosQ1 = document.getElementsByName("QuesString");
  var reponseQ1 = "";
  for(var i = 0; i < radiosQ1.length; i++) {
    if(radiosQ1[i].checked) {
      reponseQ1 = radiosQ1[i].value;
    }  
}
  
  if(reponseQ1 == '"05"') {
    message = "<br><br> Pour la premiere question " + reponseQ1 + " est la bonne reponse!"
  } else {
    message = "<br><br> Pour la premiere question " + reponseQ1 + " est la mauvaise reponse.<br> La bonne reponse est : \"05\""
  }

  //Correction question 2
  var paysAff = document.getElementById("txtPaysAfficher").value;

  if (paysAff == "Canada") {
    message += "<br><br> Pour la deuxieme question " + paysAff + " est la bonne reponse!"
  } else {
    message += "<br><br> Pour la deuxieme question " + paysAff + " est la mauvaise reponse. <br> La bonne reponse est : Canada"
  }

  //Correction question 3
  var checkVariable = document.getElementsByName("variable");
  var reponseQ3 = false;
  for (var i=0; i < checkVariable.length; i++) {
    if (checkVariable[0].checked && checkVariable[3].checked && !(checkVariable[1].checked) && !(checkVariable[2].checked)) {
      reponseQ3 = true;
    }
  }

  if (reponseQ3 == false) {
    message += "<br><br> Pour la troisieme question vous avez choisi la mauvaise reponse. <br> La bonne reponse est : cout et nombreDePatte"
  } else {
    message += "<br><br> Pour la troisieme question vous avez choisi la bonne reponse!"
  }

  //Correction question 4
  var selCondition = document.getElementById("selConditionnel").value;

  if (selCondition == "faux") {
    message += "<br><br>Pour la quatrieme question vous avez choisi la bonne reponse!"
  } else {
    message += "<br><br>Pour la quatrieme question vous avez choisi la mauvaise reponse. La bonne reponse est : if(x=5)"
  }

  //Afficher le message sur la page web
  affiche.innerHTML = message;
}