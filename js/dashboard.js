// Funcionalidade simples para atualizar a data e hora na Topbar
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    // Capitaliza a primeira letra do dia da semana
    let dateString = now.toLocaleDateString('pt-BR', options);
    dateString = dateString.charAt(0).toUpperCase() + dateString.slice(1);
    document.getElementById('datetime').textContent = dateString;
}

// Atualiza a cada segundo
setInterval(updateDateTime, 1000);
updateDateTime(); // Chamada inicial