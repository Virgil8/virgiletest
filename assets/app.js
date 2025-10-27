const burger = document.getElementById("burgerBtn");
const nav = document.getElementById("mainNav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    document.body.classList.toggle("nav-open", nav.classList.contains("open"));
  });

  // Fermer le menu après clic sur un lien
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("nav-open");
    });
  });
}

// cart count sync – démo
function setCartCount(val) {
  document.querySelectorAll("#cartCount, #cartCountProduct, #cartCountCart").forEach(el => {
    if (el) el.textContent = val;
  });
}

// add to cart (démo front)
document.querySelectorAll("[data-add-cart]").forEach(btn => {
  btn.addEventListener("click", () => {
    setCartCount(1);
    alert("LYNX//CORE ajouté au panier ✅");
  });
});