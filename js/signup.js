document.addEventListener('DOMContentLoaded', () => {
    const formSignup = document.getElementById('form-signup');
    const selectSetor = document.getElementById('setor');
    const grupoEquipe = document.getElementById('grupo-equipe');
    const selectEquipe = document.getElementById('equipe');
    const feedbackBox = document.getElementById('feedback');

    // Lógica para exibir/ocultar a lista de "Equipe"
    selectSetor.addEventListener('change', (event) => {
        const setorSelecionado = event.target.value;

        if (setorSelecionado === 'servfaz') {
            // Mostra a lista e a torna obrigatória
            grupoEquipe.classList.remove('hidden-field');
            grupoEquipe.classList.add('visible-field');
            selectEquipe.setAttribute('required', 'true');
        } else {
            // Oculta a lista, remove a obrigatoriedade e limpa o valor preenchido
            grupoEquipe.classList.remove('visible-field');
            grupoEquipe.classList.add('hidden-field');
            selectEquipe.removeAttribute('required');
            selectEquipe.value = ''; 
        }
    });

    // Simulação de envio do formulário
    formSignup.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const btnSubmit = formSignup.querySelector('.btn-submit');
        const textoOriginal = btnSubmit.textContent;
        
        btnSubmit.textContent = 'Processando...';
        btnSubmit.disabled = true;

        // Aqui futuramente conectaremos com o backend (Java/SpringBoot e PostgreSQL)
        setTimeout(() => {
            feedbackBox.className = 'feedback-message success';
            feedbackBox.textContent = 'Cadastro realizado com sucesso! Redirecionando...';
            
            btnSubmit.textContent = textoOriginal;
            btnSubmit.disabled = false;
            
            // formSignup.reset(); // Limpa o form após o sucesso
        }, 1500);
    });
});