   const tarefas = [];

    function adicionarTarefa() {
      const input = document.getElementById("inputTarefa");
      const descricao = input.value.trim();

      if (descricao === "") return;

      tarefas.push({ descricao, status: false });
      input.value = "";
      renderizarTarefas();
    }

    function alternarStatus(index) {
      tarefas[index].status = !tarefas[index].status;
      renderizarTarefas();
    }

    function renderizarTarefas() {
      const lista = document.getElementById("listaTarefas");
      lista.innerHTML = "";

      tarefas.forEach((tarefa, index) => {
        const div = document.createElement("div");
        div.className = "tarefa";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;
        checkbox.onchange = () => alternarStatus(index);

        const span = document.createElement("span");
        span.textContent = tarefa.descricao;
        span.className = "descricao " + (tarefa.status ? "concluida" : "nao-concluida");

        div.appendChild(checkbox);
        div.appendChild(span);
        lista.appendChild(div);
      });
    }