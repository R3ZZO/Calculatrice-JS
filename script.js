

document.getElementById("chiffre1").onclick = function(){
    document.getElementById("champ").value+="1";
}

document.getElementById("chiffre2").onclick = function(){
    document.getElementById("champ").value+="2";
}

document.getElementById("chiffre3").onclick = function(){
    document.getElementById("champ").value+="3";
}

document.getElementById("chiffre4").onclick = function(){
    document.getElementById("champ").value+="4";
}

document.getElementById("chiffre5").onclick = function(){
    document.getElementById("champ").value+="5";
}

document.getElementById("chiffre6").onclick = function(){
    document.getElementById("champ").value+="6";
}

document.getElementById("chiffre7").onclick = function(){
    document.getElementById("champ").value+="7";
}

document.getElementById("chiffre8").onclick = function(){
    document.getElementById("champ").value+="8";
}

document.getElementById("chiffre9").onclick = function(){
    document.getElementById("champ").value+="9";
}

document.getElementById("chiffre0").onclick = function(){
    document.getElementById("champ").value+="0";
}

document.getElementById("clean").onclick = function(){
    document.getElementById("champ").value=""; 
    document.getElementById("resultat").textContent="";
    resultat = 0; 
}


document.getElementById("virgule").onclick = function(){
    document.getElementById("champ").value+=".";
}

document.getElementById("addition").onclick = function(){
    calcul("+");
    champ.focus();
}

document.getElementById("soustraire").onclick = function(){
    calcul("-");
    champ.focus();
}

document.getElementById("multiplier").onclick = function(){
    calcul("×");
    champ.focus();
}

document.getElementById("diviser").onclick = function(){
    calcul("÷");
    champ.focus();
}

document.getElementById("egal").onclick = function(){
    calcul("=");
    champ.focus();
}






var affichage_resultat = document.getElementById("resultat")
var champ = document.getElementById("champ");
champ.focus();
var addition = document.getElementById("addition");
var soustraire = document.getElementById("soustraire");
var diviser = document.getElementById("diviser");
var multiplier = document.getElementById("multiplier");
var resultat = 0;
var operateur = "";


function calcul(operation){

    var erreurDivision = false;
    if (champ.value == "" && resultat != 0){
        var nombre = resultat;
    } else{
        var nombre = champ.value *1;
    }
    
   
    

    if (operateur == "+"){      
        resultat += nombre;
    }
    else if (operateur == "-"){
        resultat -= nombre;
    }
    else if (operateur == "÷"){
        if (nombre != 0){
            resultat /= nombre;
        } else {
            erreurDivision = true;
            resultat = 0;
        }
        
    }
    else if (operateur == "×"){
        resultat *= nombre;
    }

    else if (operateur == ""){
        resultat = nombre;
    }


    if (erreurDivision == false){
        if (operation != "="){
            operateur = operation;
            affichage_resultat.textContent = resultat + " " + operateur;
        }
        else {
            operateur = "";
            affichage_resultat.textContent = resultat + " " + operateur;
        }

    } else {
        operateur = "";
        affichage_resultat.textContent = "Impossible de diviser par 0";
    }
    
    champ.value = "";
    champ.focus();

    
}



