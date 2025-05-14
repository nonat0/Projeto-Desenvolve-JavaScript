
    const paragrafos = document.querySelectorAll("p");
    paragrafos.forEach(p => {
      p.classList.add("paragrafo");
    });

    setTimeout(() => {
      document.getElementById("titulo").textContent = "Título Alterado";
    }, 2000);

    setTimeout(() => {
      const itens = document.querySelectorAll("#lista li");
      itens.forEach(item => {
        item.style.color = "red";
        item.style.fontWeight = "bold";
      });
    }, 3000);

    setTimeout(() => {
      document.getElementById("botao").textContent = "Texto Alterado";
    }, 4000);