    // la fonction action doit dans le document recuperer la couleur du paragraphe 
    // dans JS la couleur doit etre entre"""
    function action(){document.getElementById("p1").style.color = "blue"}
    function action1(){document.getElementById("div1").style.backgroundColor="orange"}
    function actionContraire(){document.getElementById("div1").style.backgroundColor="pink"}

// On peut le faire d'une autre maniere en écoutant l'évenement
// on cree une variable et on lui dit va là où y'a id p2 puis  écoute moi l'evenement onclick et applique la fonction actionContraire() 
const actionecoute = document.getElementById("p2").addEventListener(onclick,actionContraire())
// windons alerte à expliquer 
    