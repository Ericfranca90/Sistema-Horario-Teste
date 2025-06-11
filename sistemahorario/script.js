document.querySelectorAll('.dropdown').forEach(dropdown => {
    const button = dropdown.querySelector('.filtro');
    const menu = dropdown.querySelector('.dropdown-menu');
  
    button.addEventListener('click', (e) => {
      e.stopPropagation();
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
  
  window.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.remove('visivel');
    });
  });
  
  document.getElementById('btn-procurar').addEventListener('click', () => {
    const curso = document.querySelector('[data-tipo="curso"]')?.closest('.dropdown')?.querySelector('.filtro')?.dataset.valor;
    const turno = document.querySelector('[data-tipo="turno"]')?.closest('.dropdown')?.querySelector('.filtro')?.dataset.valor;
    const semestre = document.querySelector('[data-tipo="semestre"]')?.closest('.dropdown')?.querySelector('.filtro')?.dataset.valor;
  
    if (curso && turno && semestre) {
      console.log("Curso:", curso);
      console.log("Turno:", turno);
      console.log("Semestre:", semestre);
      // Aqui você pode imprimir dados do banco no itinerário futuramente
    } else {
      alert("Selecione todas as opções antes de procurar.");
    }
  });
  