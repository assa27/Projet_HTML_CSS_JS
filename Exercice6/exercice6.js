
const form=document.getElementById("userForm")

function ajout_utilisateur(event){
    event.preventDefault();
    let name=document.getElementById("nom").value;
    let surname=document.getElementById("prenom").value;
    let body=document.getElementById("tbody");
    let tr1=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let bouton_modifier=document.createElement("button");
    let bouton_supprimer=document.createElement("button");
    let bouton_archiver=document.createElement("button");

    td1.textContent=name;
    td2.textContent=surname;

// appendChild sert à ajouter un element html 
    td3.appendChild(bouton_modifier);
    td4.appendChild(bouton_supprimer);
    td5.appendChild(bouton_archiver);

    bouton_modifier.textContent="Modifier";

    bouton_supprimer.textContent="Supprimer";

    bouton_archiver.textContent="Archiver";

    bouton_modifier.addEventListener("click",function(){
// prompt permet d'afficher une petite fenetre et un vide pour remplir 
        let nouveauNom=prompt("Nouveau nom?");
        let nouveauPrenom=prompt("Nouveau prenom?");
        if (nouveauNom){
            td1.textContent=nouveauNom;
        }
        if (nouveauPrenom){
            td2.textContent=nouveauPrenom;
        }
    });


    bouton_supprimer.addEventListener("click",function(){
        tr1.remove();
    });


    bouton_archiver.addEventListener("click",function(){
        // tr1.style.textDecoration="line-through";
        // tr1.style.opacity="0.5";
        td1.classList.toggle("hidden");
        td2.classList.toggle("hidden");
        td3.classList.toggle("hidden");
        td4.classList.toggle("hidden");
        if (td1.classList.contains("hidden")) {
         bouton_archiver.textContent = "Désarchiver";}
        else {
         bouton_archiver.textContent = "Archiver";
        
        }
    });


    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);
    tr1.appendChild(td5);
    body.appendChild(tr1);


    // pour vider le champ
    name=document.getElementById("nom").value="";
    surname=document.getElementById("prenom").value="";
    
}

// on ecoute le formulaire 
form.addEventListener("submit", ajout_utilisateur)
