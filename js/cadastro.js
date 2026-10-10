
const formulario = document.getElementById("form-cadastro");
const feedback = document.getElementById("feedback");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const setor = document.getElementById("setor").value;

    feedback.className = "feedback-message";
    feedback.style.display = "none";

    if (!nome || !email || !senha || !setor) {
        mostrarMensagem("Preencha todos os campos.", "error");
        return;
    }

    if (senha.length < 8) {
        mostrarMensagem(
            "A senha deve ter pelo menos 8 caracteres.",
            "error"
        );
        return;
    }

    mostrarMensagem(
        "Dados validados! Cadastro pronto para integração com o sistema.",
        "success"
    );
});

function mostrarMensagem(mensagem, tipo) {
    feedback.textContent = mensagem;
    feedback.className = "feedback-message " + tipo;
    feedback.style.display = "block";
}
