
//declaration des variables
var formContact = document.getElementById("contact");
var nom = formContact.saisieNom;
var prenom = document.getElementById("saisiePrenom");
var dateNaissance = document.getElementById("dateN");
var texte = Document.getElementById("textMessage");

// verification saisie nom et prenom
function verifNom(){
    console.log(nom.value);
    for(var i = 0; i < nom.value.length; i++){
        var lettre = nom.value[i];
        console.log(lettre);
        if ((lettre == '0') || (lettre == '1') || (lettre == '2') || (lettre == '3') ||
             (lettre == '4') || (lettre == '5') || (lettre == '6') || (lettre == '7') ||
             (lettre == '8') || (lettre == '9') || (lettre == '!') || (lettre == ',') ||
             (lettre == '_') || (lettre == '/') || (lettre == '\\') || (lettre == '"') ){
                 nom.style.borderColor = "red";
                 nom.value = "";
                 nom.placeholder = "pas de chiffre ou de caractères spéciaux";
             } else {
                 nom.style.borderColor = "black";
             }
    }   
}
function verifPrenom(){
    console.log(prenom.value);
    for(var i = 0; i < prenom.value.length; i++){
        var lettre = prenom.value[i];
        console.log(lettre);
        if ((lettre == '0') || (lettre == '1') || (lettre == '2') || (lettre == '3') ||
             (lettre == '4') || (lettre == '5') || (lettre == '6') || (lettre == '7') ||
             (lettre == '8') || (lettre == '9') || (lettre == '!') || (lettre == ',') ||
             (lettre == '_') || (lettre == '/') || (lettre == '\\') || (lettre == '"') ){
                 nom.style.borderColor = "red";
                 nom.value = "";
                 nom.placeholder = "pas de chiffre ou de caractères spéciaux";
             } else {
                 nom.style.borderColor = "black";
             }
    }   
}


// verification si mineur ou majeur
function mineur(){
    var aujd = new Date();
    var jour = aujd.getDate(); 
    var mois = aujd.getMonth();
    var annee = aujd.getFullYear();

    var jourNaissance = dateNaissance.valueAsDate.getDate();
    var moisNaissance = dateNaissance.valueAsDate.getMonth();
    var anneeNaissance = dateNaissance.valueAsDate.getFullYear();

    console.log(aujd + " jour " + jour + " mois "+  mois + " annee "+ annee);
    console.log(dateNaissance.valueAsDate, jourNaissance, moisNaissance, anneeNaissance);

    if (annee-anneeNaissance < 18){
        dateNaissance.style.backgroundColor = "red";
    } else {
        dateNaissance.style.backgroundColor = "";
    }

}

// verification email
// var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



// compteur du nombre de caracteres
function(){
    count = texte.value.length;
    console.log(count);
}


function action(){
    verifNom();
    verifPrenom();
    mineur();
}