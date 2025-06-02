const escalas = {
      mida: [2, 9, 16, 23],
      louvor: [5, 12, 19, 26],
      infantil: [7, 14, 21, 28]
    };

    const calendario = document.getElementById("calendario");
    const ministerioSelect = document.getElementById("ministerio");
    const detalhes = document.getElementById("detalhesEscala");

    function gerarCalendario(ministerio) {
      calendario.innerHTML = "";
      const diasDoMes = 30; // por simplicidade
      for (let dia = 1; dia <= diasDoMes; dia++) {
        const divDia = document.createElement("div");
        divDia.classList.add("dia");
        divDia.textContent = dia;

        if (escalas[ministerio].includes(dia)) {
          divDia.classList.add("com-escala");
          divDia.addEventListener("click", () => {
            detalhes.innerHTML = `
              <h3>Escala do dia ${dia}</h3>
              <p>Ministério: ${ministerio.charAt(0).toUpperCase() + ministerio.slice(1)}</p>
              <p>Função: ${ministerio === 'mida' ? 'Data-show' : ministerio === 'louvor' ? 'Violão' : 'Sala Infantil'}</p>
              <p>Horário: 18h30</p>
            `;
          });
        }

        calendario.appendChild(divDia);
      }
    }

    ministerioSelect.addEventListener("change", e => {
      gerarCalendario(e.target.value);
      detalhes.innerHTML = '<h3>Detalhes da Escala</h3><p>Selecione um dia com escala.</p>';
    });

    gerarCalendario(ministerioSelect.value);