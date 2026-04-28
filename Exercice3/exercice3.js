const valider=document.getElementById("envoyer")
// 👉 Le bouton submit veut faire :j’envoie et je recharge” toi tu dis avec preventDefault() :STOP, je gère moi-même”
function recuperer_champ(event){
    event.preventDefault();
    let prenom=document.getElementById("prenom").value;
    let nom=document.getElementById("nom").value;
    let age=document.getElementById("age").value;
    // à revoir est ce qu'il va recup commentaire ou bien le contenu ?
    let commentaire=document.getElementById("commentaire");
    let pays=document.getElementById("pays");
    let sexe= document.querySelector('input[name="sexe"]:checked');
    let loisirs=document.querySelectorAll('input[name="loisir"]:checked');
    let ph=document.getElementById("phrase");
    let listLoisirs=[]
    loisirs.forEach(function(loisirs){
        listLoisirs.push(loisirs.value)
    })
    console.log(document.getElementById("nom"));
    
    
    // console.log(nom.value);
    // console.log(age.value);
    // console.log(sexe.value);
    // console.log(commentaire.value);
    // console.log(pays)
    // pour afficher les données
    ph.textContent=prenom + " " + nom + " " + "age:" + age + " " + "ans" + " "+ "sexe:" + sexe.value + " " + "loisirs:" + listLoisirs.join(", ") + " " + "pays: "+ pays.value
    // ou bien by 
    // document.getElementById("resultat").innerHTML =
    //         "Nom: " + nom + "<br>" +
    //         "Âge: " + age + "<br>" +
    //         "Sexe: " + sexeValue + "<br>" +
    //         "Loisirs: " + loisirs.join(", ") + "<br>" +
    //         "Pays: " + pays + "<br>" +
    //         "Commentaire: " + commentaire;
    
    }
// valider.addEventListener("click", recupererchamp)