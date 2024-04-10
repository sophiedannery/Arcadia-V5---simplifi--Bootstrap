function disableCellsForRole(role) {
    // Sélectionnez toutes les cellules éditables
    const editableCells = document.querySelectorAll('.editable-cell-employe');

    // Parcourez chaque cellule éditable
    editableCells.forEach(cell => {
        // Désactivez la cellule si le rôle de l'utilisateur correspond à un certain critère
        if (role != 'employe') {

            const foodInputs = cell.querySelectorAll('.emp-input');
            
            foodInputs.forEach(input => {
                input.disabled = true;
            });
        }

        if (role != 'veterinaire') {

            const foodInputs = cell.querySelectorAll('.vet-input');
            
            foodInputs.forEach(input => {
                input.disabled = true;
            });
        }

    });



}


// Supposons que vous ayez récupéré le rôle de l'utilisateur dans une variable appelée 'userRole'
const userRole = 'veterinaire'; // ou 'roleB' ou tout autre rôle

// Appelez la fonction pour désactiver les cellules en fonction du rôle de l'utilisateur
disableCellsForRole(userRole);
