 const nomesCurtiram = [];

function curtir() {
    const input = document.getElementById("nomeInput");
    const nome = input.value.trim();

    if (nome === "" || nomesCurtiram.includes(nome)) return;

    nomesCurtiram.push(nome);
    atualizarMensagem();
    input.value = "";
}

function atualizarMensagem() {
    const p = document.getElementById("mensagemCurtidas");
    const total = nomesCurtiram.length;

    if (total === 0) {
        p.textContent = "Ninguém curtiu";
        } else if (total === 1) {
        p.textContent = `${nomesCurtiram[0]} curtiu`;
        } else if (total === 2) {
        p.textContent = `${nomesCurtiram[0]} e ${nomesCurtiram[1]} curtiram`;
        } else {
        p.textContent = `${nomesCurtiram[0]}, ${nomesCurtiram[1]} e mais ${total - 2} pessoas curtiram`;
    }
}