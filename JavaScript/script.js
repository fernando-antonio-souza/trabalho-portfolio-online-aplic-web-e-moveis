

// Adiciona um evento ao formulário de contato para interceptar o envio
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();


      // Verifica se algum campo obrigatório está vazio
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Mostra o modal de sucesso
    let modal = document.getElementById("modal");
    modal.style.display = "flex";

    // Limpa os campos
    document.getElementById("form-contato").reset();
});

// Fecha o modal ao clicar em "OK"
document.getElementById("fechar-modal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

// Fecha o modal clicando fora dele
window.addEventListener("click", function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});