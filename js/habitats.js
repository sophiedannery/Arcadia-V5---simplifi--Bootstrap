// Affiche au clic de la section savane
  function showSavaneSection() {
    var element = document.getElementById("savane-section");
    element.classList.toggle("hidden");

    if (!element.classList.contains("hidden")) {
        element.scrollIntoView({ behavior: "smooth" });
    }

  }
