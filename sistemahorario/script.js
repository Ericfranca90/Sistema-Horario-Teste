function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('expandida');
}

function mostrarSecao(secao) {
    const conteudo = document.getElementById("conteudo-dinamico");
    const profile = document.getElementById("profile-section");
}
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const button = dropdown.querySelector('.filtro');
    const menu = dropdown.querySelector('.dropdown-menu');
  
    button.addEventListener('click', () => {
      menu.classList.toggle('visivel');
    });
  
    dropdown.querySelectorAll('.opcao').forEach(opcao => {
      opcao.addEventListener('click', () => {
        button.textContent = opcao.textContent;
        button.dataset.valor = opcao.textContent;
        menu.classList.remove('visivel');
      });
    });
  });
  
  // Clique fora fecha o menu
  window.addEventListener('click', function(e) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      if (!menu.parentElement.contains(e.target)) {
        menu.classList.remove('visivel');
      }
    });
  });
  
  // Ação do botão Procurar
  document.getElementById('btn-procurar').addEventListener('click', () => {
    const curso = document.querySelector('[data-tipo="curso"]')?.closest('.dropdown')?.querySelector('.filtro')?.dataset.valor;
    const turno = document.querySelector('[data-tipo="turno"]')?.closest('.dropdown')?.querySelector('.filtro')?.dataset.valor;
    const semestre = document.querySelector('[data-tipo="semestre"]')?.closest('.dropdown')?.querySelector('.filtro')?.dataset.valor;
  
    if (curso && turno && semestre) {
      console.log("Curso:", curso);
      console.log("Turno:", turno);
      console.log("Semestre:", semestre);
      // Aqui você fará a chamada ao seu banco de dados futuramente
    } else {
      alert("Selecione todas as opções antes de procurar.");
    }
  });
  