document.addEventListener('DOMContentLoaded', function() {
    const captchaElement = document.getElementById('captcha');
    const captchaResultElement = document.getElementById('captcha-result');
    let num1 = Math.floor(Math.random()* 10);
    let num2 = Math.floor(Math.random()* 10);
    captchaElement.textContent = `${num1} + ${num2}`;
    let captchaAwnser = num1 + num2



function Submit(event){
    event.preventDefault();

    if(parseInt(captchaResultElement.value) !== captchaAwnser){
        alert('La réponse est incorrecte. Veuillez réessayer');
        return;
    }
    const form = document.getElementById('contact-form');
    const subject = encodeURIComponent("Formulaire de contact");
    const body = encodeURIComponent (
        `Nom: ${form.nom.value}\n` + //Récupère et encode le nom de famille
        `Prenom: ${form.prenom.value}\n` + 
        `Adresse email: ${form.email.value}\n` + 
        `Date de naissance: ${form.date.value}\n` + 
        `Formations souhaitées: ${form.formations.value}\n` + 
        `Actuellement, vous êtes: ${form.annee.value}\n` + 
        `Langues parlées: ${Array.from(form.langues)
            .filter(langue => langue.checked)
            .map(langue => langue.value)
            .join(', ')}\n\n` +
        `Demande spécifique: \n${form.demande.value}`
        
    );

    const mailtoLink = `mailto:vautier.e2305222@etud.univ-ubs.fr?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
}
    document.getElementById('contact-form').addEventListener('submit', Submit);
});