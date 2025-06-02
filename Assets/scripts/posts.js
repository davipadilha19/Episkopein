  function mostrarAba(id) {
    document.querySelectorAll('.abaPost').forEach(div => {
      div.classList.remove('ativa');
    });
    document.getElementById(id).classList.add('ativa');
  }
