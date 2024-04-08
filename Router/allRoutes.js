import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/signin", "Connexion", "/pages/signin.html", "/js/signin.js"),
    new Route("/services", "Services", "/pages/services.html", "/js/services.js"),
    new Route("/carteRestaurantA", "Savana Grill", "/pages/servicesAll/carteRestaurantA.html"),
    new Route("/carteRestaurantB", "Pizzeria de la Jungle", "/pages/servicesAll/carteRestaurantB.html"),
    new Route("/carteRestaurantC", "Café Oasis", "/pages/servicesAll/carteRestaurantC.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html", "/js/habitats.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";