const titre = document.getElementById("titre")
const bouton = document.getElementById("bouton")
// je veux changer le texte bonjour quand il clique sur le bouton 
bouton.addEventListener("click",() => {
    titre.innerHTML = "Rebonjour";
    titre.style.color = "yellow";
})



// }

// getElementById() → récupérer un élément
// #textContent → modifier le texte
// #classList.add() → ajouter du CSS avec Js**/
// pour recuperer un element let variable que ti veut=document.getElementById("nomID")


// je peux faire ce format mais dans un cas je ne peux gérer qu'un seul élément
// function changer() {
//     let titre=document.getElementById("titre");
//     let button=document.getElementById("button");
//     titre.textContent="Texte changé";
//     titre.classList.add("rouge") 