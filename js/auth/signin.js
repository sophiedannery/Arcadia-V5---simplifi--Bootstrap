// Affichage au clic du formulaire de connexion
function showSignInForm() {

    var element = document.getElementById("container-connexion");

    element.classList.toggle("hidden-form");
  }


  
//CHECK CREDENTIALS

  const inputMail = document.getElementById("EmailInput");
  const inputPassword = document.getElementById("PasswordInput")
  const btnValidation = document.getElementById("btn-validation-connexion");

  btnValidation.addEventListener("click", checkCredentials);

  function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    if(inputMail.value == "test@mail.com" && inputPassword.value == "123") {

      // Il faudra récupérer le vrai token
      const token = "jkfdnssjbjnkvlbfvbfdvbfdv"
      setToken(token);

      //Placer ce token en cookie

      setCookie(roleCookieName, "admin", 7);

      window.location.replace("/espace-admin");
    } else {
      inputMail.classList.add("is-invalid");
      inputPassword.classList.add("is-invalid");
    }
  }



  
