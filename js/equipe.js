document.addEventListener('DOMContentLoaded', () => {
    const formEquipe = document.getElementById('form-equipe');
    const feedbackBox = document.getElementById('feedback');

    formEquipe.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const nomeEquipe = document.getElementById('nome').value.trim();
        const btnSubmit = formEquipe.querySelector('.btn-submit');
        const textoOriginal = btnSubmit.textContent;
        
        btnSubmit.textContent = 'Salvando...';
        btnSubmit.disabled = true;

        // Simulação do envio (Fetch/AJAX para o Backend)
        setTimeout(() => {
            feedbackBox.className = 'feedback-message success';
            feedbackBox.innerHTML = `<strong>Sucesso!</strong><br>A equipe <em>${nomeEquipe}</em> foi registrada com sucesso.`;
            
            console.log("Dados da Equipe para API:", {
                nome: nomeEquipe
            });

            btnSubmit.textContent = textoOriginal;
            btnSubmit.disabled = false;
            
            setTimeout(() => {
                formEquipe.reset();
                feedbackBox.style.display = 'none';
                feedbackBox.className = 'feedback-message'; 
            }, 3000);
            
        }, 1000); 
    });
});