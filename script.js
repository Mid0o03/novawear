// Fichier JS : script.js

document.addEventListener("DOMContentLoaded", () => {
  // Produits fictifs
  const produits = [
    { nom: "T-shirt Nova (H)", type: "homme" },
    { nom: "Jupe Nova (F)", type: "femme" },
    { nom: "Casquette logo", type: "accessoires" },
    { nom: "Sweat capuche (H)", type: "homme" },
    { nom: "Robe légère (F)", type: "femme" },
    { nom: "Sac Nova", type: "accessoires" },
  ];

  const catalogue = document.querySelector(".produits");
  const boutonsFiltre = document.querySelectorAll(".filtres button");
  const compteurPanier = document.getElementById("compteur-panier");
  const contenuPanier = document.querySelector(".contenu-panier");

  let panier = [];

  afficherProduits("tous");

  boutonsFiltre.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filtre = btn.dataset.filtre;
      afficherProduits(filtre);
    });
  });

  function afficherProduits(filtre) {
    catalogue.innerHTML = "";
    produits
      .filter((p) => filtre === "tous" || p.type === filtre)
      .forEach((p) => {
        const div = document.createElement("div");
        div.className = "produit";
        div.innerHTML = `
          <h3>${p.nom}</h3>
          <button>Ajouter au panier</button>
        `;
        div.querySelector("button").addEventListener("click", () => ajouterAuPanier(p));
        catalogue.appendChild(div);
      });
  }

  function ajouterAuPanier(produit) {
    panier.push(produit);
    updatePanier();
  }

  function updatePanier() {
    compteurPanier.innerText = panier.length;
    contenuPanier.innerHTML = "";

    if (panier.length === 0) {
      contenuPanier.innerHTML = "<p>Votre panier est vide.</p>";
      return;
    }

    const ul = document.createElement("ul");
    panier.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerText = `${item.nom}`;
      ul.appendChild(li);
    });
    contenuPanier.appendChild(ul);
  }

  // Formulaire contact
  const formContact = document.getElementById("form-contact");
  if (formContact) {
    formContact.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Merci pour votre message ! Nous vous répondrons bientôt.");
      formContact.reset();
    });
  }
});
