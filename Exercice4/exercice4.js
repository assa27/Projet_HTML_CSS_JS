function ajouter(){
    let valeur=document.getElementById("texte").value;
    // li cree un nouveau element de la liste mais pas encore ajouter
    let li=document.createElement("li");
    // li prend la valeur du texte ecrit
    li.textContent= valeur;
    // on ajoute li dans la liste 
    document.getElementById("liste").appendChild(li);

}