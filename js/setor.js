document.addEventListener('DOMContentLoaded', () => {
    const formSetor = document.getElementById('form-setor');
    const feedbackBox = document.getElementById('feedback');

    formSetor.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const nomeSetor = document.getElementById('nome').value.trim();
        const btnSubmit = formSetor.querySelector('.btn-submit');
        const textoOriginal = btnSubmit.textContent;
        
        btnSubmit.textContent = 'Salvando...';
        btnSubmit.disabled = true;

        // Simulação do envio (Fetch/AJAX para o Backend)
        setTimeout(() => {
            feedbackBox.className = 'feedback-message success';
            feedbackBox.innerHTML = `<strong>Sucesso!</strong><br>O setor <em>${nomeSetor}</em> foi registrado com sucesso.`;
            
            console.log("Dados do Setor para API:", {
                nome: nomeSetor
            });

            btnSubmit.textContent = textoOriginal;
            btnSubmit.disabled = false;
            
            setTimeout(() => {
                formSetor.reset();
                feedbackBox.style.display = 'none';
                feedbackBox.className = 'feedback-message';
            }, 3000);
            
        }, 1000); 
    });
});