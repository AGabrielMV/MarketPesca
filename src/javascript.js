function openLoginPage() {
    window.open('login.html', '_self'); // Abre a página de Login
}

document.addEventListener('DOMContentLoaded', function() {
    // Captura o evento de envio do formulário
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        window.location.href = "marketplace.html"; // Redireciona para a página desejada
    });
});

