function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');

    // Récupérer la section .home
    var homeSection = document.querySelector('.home');

    // Toggle la classe de flou en fonction de l'état du menu
    homeSection.classList.toggle('blurred');

    // Cacher la boîte de recherche si elle est ouverte
    closeSearch();
}

function toggleSearch() {
    var searchBox = document.querySelector('.search-box');
    searchBox.style.display = (searchBox.style.display === 'none' || searchBox.style.display === '') ? 'block' : 'none';
}

function closeSearch() {
    var searchBox = document.querySelector('.search-box');
    searchBox.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function () {
    // Ajoutez un gestionnaire d'événements pour le clic au niveau du document
    document.addEventListener('click', function (event) {
        var searchBox = document.querySelector('.search-box');
        var searchIcon = document.querySelector('.bx-search');

        // Vérifiez si le clic n'est pas dans la boîte de recherche ni dans l'icône de recherche
        if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
            searchBox.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.search-box input[type="text"]');
    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            // Appeler la fonction de recherche ici
            alert('Recherche lancée avec : ' + searchInput.value);
            // Vous pouvez remplacer la ligne ci-dessus par le code de recherche réel
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Récupérez l'élément du formulaire de connexion
    var loginForm = document.querySelector('.login-form');
    var loginIcon = document.querySelector('.bx-log-in');

    // Ajoutez un gestionnaire d'événements pour le clic sur l'icône de connexion
    loginIcon.addEventListener('click', function (event) {
        // Empêchez la propagation du clic pour éviter de déclencher le gestionnaire d'événements du document
        event.stopPropagation();
        // Affichez le formulaire de connexion
        loginForm.style.display = 'block';
    });

    // Ajoutez un gestionnaire d'événements pour le clic au niveau du document
    document.addEventListener('click', function (event) {
        // Vérifiez si le clic n'est pas dans le formulaire de connexion ni sur l'icône de connexion
        if (!loginForm.contains(event.target) && !loginIcon.contains(event.target)) {
            // Cachez le formulaire de connexion
            loginForm.style.display = 'none';
        }
    });
});

// Ajoutez une fonction pour traiter la soumission du formulaire de connexion
function submitLoginForm() {
    // Ajoutez le traitement de la soumission du formulaire ici
    alert('Login button clicked!');
}




