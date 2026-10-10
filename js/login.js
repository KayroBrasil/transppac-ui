// Funcionalidade JavaScript (ES6+)
document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form-login');
    const feedbackBox = document.getElementById('feedback');

    formLogin.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o recarregamento da página

        // Extração dos dados do formulário
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Reset de estado visual do feedback
        feedbackBox.className = 'feedback-message';
        feedbackBox.textContent = '';

        // Validação Simples no Front-end
        if (!email || !password) {
            feedbackBox.classList.add('error');
            feedbackBox.textContent = 'Por favor, preencha todos os campos.';
            return;
        }

        // Simulação de processamento assíncrono (ex: Integração futura com API REST em PHP/CodeIgniter e MariaDB)
        const submitButton = formLogin.querySelector('.btn-submit');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Autenticando...';
        submitButton.disabled = true;

        setTimeout(() => {
            // Simulação visual de sucesso (aqui entraria a lógica de validação do banco)
            feedbackBox.classList.add('success');
            feedbackBox.textContent = `Login autorizado para: ${email}. Redirecionando...`;
            
            // Retorna o botão ao estado normal
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }, 1500); // 1.5s de simulação de carregamento
    });
});