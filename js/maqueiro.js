
const formulario = document.getElementById("form-maqueiro");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Verifica se os campos obrigatórios foram preenchidos
    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    // Captura os dados do formulário
    const maqueiro = {
        matricula: document.getElementById("matricula").value.trim(),
        nome: document.getElementById("nome").value.trim(),
        equipe: document.getElementById("equipe").value
    };

    // Exibe os dados no console para teste
    console.log("Dados do maqueiro:", maqueiro);

    alert("Formulário preenchido corretamente!");

    // Limpa os campos após o teste
    formulario.reset();
});
