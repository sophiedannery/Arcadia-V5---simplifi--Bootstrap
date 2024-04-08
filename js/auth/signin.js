// Affiche au clic du formulaire de connexion
function showSignInForm() {

    var element = document.getElementById("container-connexion");

    element.classList.toggle("hidden-form");
  }


  // Vérifier les champs requis

 

  const inputMail = document.getElementById("EmailInput");
  const inputPassword = document.getElementById("PasswordInput")
  const btnValidation = document.getElementById("btn-validation-connexion");

  inputMail.addEventListener("keyup", validateForm);
  inputPassword.addEventListener("keyup", validateForm);
  

  function validateForm(){
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);

    if(mailOk && passwordOk){
      btnValidation.disabled = false;
    } else {
      btnValidation.disabled = true;
    }

  }


   //vérifier email

  function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;

    if(mailUser.match(emailRegex)){
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      return true;
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      return false;
    }
  }

  // vérifier mot de passe

  function validatePassword(input){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;

    if(passwordUser.match(passwordRegex)){
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      return true;
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      return false;
    }
  }