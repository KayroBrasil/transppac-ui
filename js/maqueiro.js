// Funcionalidade JavaScript (ES6+)
document.addEventListener('DOMContentLoaded', () => {
    const formMaqueiro = document.getElementById('form-maqueiro');
    const feedbackBox = document.getElementById('feedback');

    formMaqueiro.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o recarregamento padrão da página
        
        // Coleta dos dados preenchidos
        const matricula = document.getElementById('matricula').value.trim();
        const nome = document.getElementById('nome').value.trim();
        const equipe = document.getElementById('equipe').value;
        
        const btnSubmit = formMaqueiro.querySelector('.btn-submit');
        const textoOriginal = btnSubmit.textContent;
        
        // Altera o estado do botão para evitar duplo clique
        btnSubmit.textContent = 'Salvando...';
        btnSubmit.disabled = true;

        // Simulação de processamento assíncrono.
        // Futuramente, esta etapa abrigará uma requisição Fetch/AJAX enviando 
        // os dados para o endpoint do Spring Boot persistir no PostgreSQL.
        setTimeout(() => {
            // Exibição do feedback positivo
            feedbackBox.className = 'feedback-message success';
            feedbackBox.innerHTML = `<strong>Sucesso!</strong><br>O maqueiro <em>${nome}</em> (Matrícula: ${matricula}) foi alocado no <strong>${equipe}</strong>.`;
            
            console.log("Dados prontos para inserção no banco de dados:", {
                matricula: matricula,
                nome: nome,
                equipe: equipe
            });

            // Restaura o botão
            btnSubmit.textContent = textoOriginal;
            btnSubmit.disabled = false;
            
            // Limpa o formulário e oculta a mensagem após 3 segundos
            setTimeout(() => {
                formMaqueiro.reset();
                feedbackBox.style.display = 'none';
                feedbackBox.className = 'feedback-message'; // reseta as classes
            }, 3000);
            
        }, 1200); // 1.2 segundos de simulação
    });
});