let tabelaSolicitacoes = document.querySelector('#solicitacoes');
tabelaSolicitacoes.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let solicitacaoId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/solicitacoes-cliente/${solicitacaoId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#solicitacao_${solicitacaoId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});