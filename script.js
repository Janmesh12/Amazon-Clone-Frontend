// ===============================
// AMAZON CLONE JAVASCRIPT
// ===============================

// 1️⃣ SEARCH BAR FUNCTIONALITY
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
  if (searchInput.value.trim() === "") {
    alert("Please enter something to search!");
  } else {
    alert(`Searching for: ${searchInput.value}`);
  }
});

// 2️⃣ CATEGORY BOX CLICK
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const categoryName = box.querySelector("h2").innerText;
    alert(`Opening category: ${categoryName}`);
  });
});

// 3️⃣ CART COUNTER
let cartCount = 0;
const cart = document.querySelector(".nav-cart span");

document.querySelectorAll(".box-content p").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent parent click
    cartCount++;
    cart.innerText = `Cart (${cartCount})`;
  });
});

// 4️⃣ BACK TO TOP BUTTON
const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 5️⃣ DYNAMIC GREETING
const greeting = document.querySelector(".nav-signin .small-text");

const hour = new Date().getHours();

if (hour < 12) {
  greeting.innerText = "Good Morning ☀️";
} else if (hour < 18) {
  greeting.innerText = "Good Afternoon 🌤️";
} else {
  greeting.innerText = "Good Evening 🌙";
}

// 6️⃣ HOVER CLICK FEEDBACK
document.querySelectorAll(".border").forEach((item) => {
  item.addEventListener("click", () => {
    item.style.backgroundColor = "#232f3e";
    setTimeout(() => {
      item.style.backgroundColor = "transparent";
    }, 300);
  });
});
  