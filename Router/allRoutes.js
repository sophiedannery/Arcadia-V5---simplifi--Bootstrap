import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),

    new Route("/contact", "Contact", "/pages/contactAll/contact.html", []),

    new Route("/message-send", "Message envoyé", "/pages/contactAll/message-send.html", []),

    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),

    new Route("/espace-admin", "Espace Administrateur", "/pages/espaces/espace-admin.html", ["admin", "veterinaire", "employe"]),
    new Route("/config-compte", "Espace Administrateur - Configuration des comptes", "/pages/espaces/espace-adminALL/config-compte.html", ["admin"]),
    new Route("/creation-compte", "Espace Administrateur - Création de compte", "/pages/espaces/espace-adminALL/creation-compte.html", ["admin"], "/js/espaces/espace-adminALL/creation-compte.js"),
    new Route("/compte-rendu", "Espace Vétérinaire - Compte rendu", "/pages/espaces/espace-veterinaireALL/compte-rendu.html", ["veterinaire", "admin", "employe"], "/js/espaces/espace-veterinaireALL/compte-rendu.js"),

    new Route("/services", "Services", "/pages/servicesAll/services.html", [], "/js/services.js"),
    new Route("/carteRestaurantA", "Savana Grill", "/pages/servicesAll/carteRestaurantA.html", []),
    new Route("/carteRestaurantB", "Pizzeria de la Jungle", "/pages/servicesAll/carteRestaurantB.html", []),
    new Route("/carteRestaurantC", "Café Oasis", "/pages/servicesAll/carteRestaurantC.html", []),
    
    new Route("/habitats", "Habitats", "/pages/habitats.html", [], "/js/habitats.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";