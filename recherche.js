// Ajouter un gestionnaire d'événement pour la soumission du formulaire
document.getElementById('formulairerechercheJS').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire
    const mot_recherche = document.getElementById('rechercheMot').value.toLowerCase(); // Obtenir le mot-clé en minuscule (recherche insensible à la casse)
    const resultats = document.getElementById('resultats'); // Div où les résultats seront affichés
    resultats.innerHTML = ''; // Réinitialiser le contenu des résultats

    // Liste des pages à rechercher
    const pages = ['page1.html', 'Media.html', 'pagejavascript.html'];

    // Parcourir chaque page pour effectuer la recherche
    pages.forEach(page => {
        fetch(page) // fetch: obtenir le contenu de la page
            .then(response => response.text()) // Convertir la réponse en texte
            .then(data => { //Vérifie si le mot est présent dans le contenu de la page (converti en minuscule)
                // Vérifier si le mot-clé est présent dans le contenu de la page
                if (data.toLowerCase().includes(mot_recherche)) {
                    // Si trouvé, ajouter un lien vers la page dans les résultats
                    resultats.innerHTML += `<div><a href="${page}">${page}: Mot-clé trouvé</a></div>`;
                } else {
                    // Si non trouvé, indiquer que le mot-clé n'est pas présent
                    resultats.innerHTML += `<div>${page}: Mot-clé non trouvé</div>`;
                }
            })
            .catch(() => {
                // En cas d'erreur lors de la récupération de la page, afficher un message d'erreur
                resultats.innerHTML += `<div>${page}: Erreur lors de la récupération de la page</div>`;
            });
    });
});
