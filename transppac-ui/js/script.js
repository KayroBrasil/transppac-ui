const maqueiros = [
    {
        nome: "João Rodrigues",
        matricula: "10245",
        status: "Disponível",
        turno: "Manhã"
    },
    {
        nome: "Maria Josefa",
        matricula: "10246",
        status: "Em rota",
        turno: "Manhã"
    },
    {
        nome: "Paulo Marques",
        matricula: "10289",
        status: "Disponível",
        turno: "Tarde"
    },
    {
        nome: "Janaina Melo",
        matricula: "10294",
        status: "Ausente",
        turno: "Noite"
    }
];

const lista = document.getElementById("listaMaqueiros");

maqueiros.forEach(function(maqueiro) {

    lista.innerHTML += `
        <div class="maqueiro-card">

            <div class="card-topo">

                <div class="avatar">
                    ${maqueiro.nome.substring(0, 2).toUpperCase()}
                </div>

                <span class="status">
                    ${maqueiro.status}
                </span>

            </div>

            <h3>${maqueiro.nome}</h3>

            <p class="matricula">
                Matrícula: ${maqueiro.matricula}
            </p>

            <span class="turno">
                 Turno: ${maqueiro.turno}
            </span>

            <div class="card-acoes">
                <button> Editar</button>
                <button> Excluir</button>
            </div>

        </div>
    `;
});