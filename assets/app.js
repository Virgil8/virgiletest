// MOBILE NAV
const burger = document.getElementById("burgerBtn");
const nav = document.getElementById("mainNav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    const willOpen = !nav.classList.contains("open");

    // toggle panneau
    nav.classList.toggle("open", willOpen);

    // toggle état global (scroll lock + header noir plein écran)
    document.body.classList.toggle("nav-open", willOpen);

    // accessibilité (utile aussi pour montrer que c'est propre)
    burger.setAttribute("aria-expanded", willOpen ? "true" : "false");
  });

  // Fermer le menu quand on clique sur un lien du menu
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// CART COUNT SYNC (démo front only)
function setCartCount(val) {
  document
    .querySelectorAll("#cartCount, #cartCountProduct, #cartCountCart")
    .forEach(el => {
      if (el) el.textContent = val;
    });
}

// ADD TO CART BUTTONS (démo)
document.querySelectorAll("[data-add-cart]").forEach(btn => {
  btn.addEventListener("click", () => {
    // ici appel API réel plus tard
    setCartCount(1);
    alert("LYNX//CORE ajouté au panier ✅");
  });
});
