// Affichez l'ensemble des attributs du champ texte
let text = document.getElementById("email");
for (let attributes of text.attributes) {
  //   console.log(attributes);
}

// Affichez la valeur de l'attribut id du champ texte
// console.log(text.getAttribute("id"));

// Vérifiez que la case à cocher possède l'attribut checked. Décochez la case si elle est cochée.
let checbox = document.getElementById("connexion");
if (checbox.hasAttribute("checked")) {
  console.log(checbox.getAttribute("checked"));
  setTimeout(() => {
    checbox.removeAttribute("checked");
  }, 3000);
}

// Affichez le ou les éléments n'ayant aucun attribut.
