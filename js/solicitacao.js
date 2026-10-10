document.addEventListener('DOMContentLoaded', () => {
    const formSolicitacao = document.getElementById('form-solicitacao');
    const selectMotivo = document.getElementById('motivo');
    const grupoMotivoOutro = document.getElementById('grupo-motivo-outro');
    const inputMotivoOutro = document.getElementById('motivo-outro');
    const feedbackBox = document.getElementById('feedback');

    // 1. Lógica para exibir/ocultar o campo "Outro" motivo
    selectMotivo.addEventListener('change', (event) => {
        const motivoSelecionado = event.target.value;

        if (motivoSelecionado === 'outro') {
            // Mostra o campo e torna a justificativa obrigatória
            grupoMotivoOutro.classList.remove('hidden-field');
            grupoMotivoOutro.classList.add('visible-field');
            inputMotivoOutro.setAttribute('required', 'true');
            inputMotivoOutro.focus(); // Foca no campo para facilitar a digitação
        } else {
            // Oculta o campo, remove a obrigatoriedade e limpa o texto
            grupoMotivoOutro.classList.remove('visible-field');
            grupoMotivoOutro.classList.add('hidden-field');
            inputMotivoOutro.removeAttribute('required');
            inputMotivoOutro.value = ''; 
        }
    });

    // 2. Prevenção de setores iguais (Ex: Origem: UTI e Destino: UTI)
    formSolicitacao.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const setorSolicitante = document.getElementById('setor-solicitante').value;
        const setorDestino = document.getElementById('setor-destino').value;

        if (setorSolicitante === setorDestino) {
            alert("O Setor Solicitante não pode ser o mesmo que o Setor de Destino.");
            return; // Para a execução do envio
        }

        // Extraindo os materiais selecionados (apenas para exemplo no console)
        const materiaisSelecionados = Array.from(document.querySelectorAll('input[name="materiais"]:checked'))
                                            .map(checkbox => checkbox.value);
        
        const btnSubmit = formSolicitacao.querySelector('.btn-submit');
        const textoOriginal = btnSubmit.textContent;
        
        btnSubmit.textContent = 'Enviando Solicitação...';
        btnSubmit.disabled = true;

        // Simulação de envio para o backend
        setTimeout(() => {
            feedbackBox.className = 'feedback-message success';
            feedbackBox.innerHTML = `<strong>Solicitação Criada!</strong><br>Avisando maqueiros disponíveis...`;
            
            console.log("Dados Prontos para API:", {
                origem: setorSolicitante,
                destino: setorDestino,
                materiais: materiaisSelecionados,
                motivo: selectMotivo.value === 'outro' ? inputMotivoOutro.value : selectMotivo.value
            });

            btnSubmit.textContent = textoOriginal;
            btnSubmit.disabled = false;
            
            // Reseta o formulário após 2 segundos
            setTimeout(() => {
                formSolicitacao.reset();
                feedbackBox.style.display = 'none';
                grupoMotivoOutro.classList.remove('visible-field');
                grupoMotivoOutro.classList.add('hidden-field');
            }, 2500);
            
        }, 1200);
    });
});